import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrism from "rehype-prism-plus";
import { BLOG_DIR } from "@/utils/blogData";
import { Metadata } from "next";

interface BlogParams {
  params: { slug: string };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(BLOG_DIR);
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, "")
  }));
}

export async function generateMetadata({ params }: BlogParams): Promise<Metadata> {
  const filePath = path.join(BLOG_DIR, `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return { title: "Not Found" };
  }
  const source = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(source);
  return { title: data.title };
}

export default async function BlogPostPage({ params }: BlogParams) {
  const slug = params.slug;

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  return (
    <div className="flex flex-col p-8 lg:px-32 lg:py-16 text-slate-300 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--app-green)]">
          {data.title}
        </h1>
        <p className="text-slate-400">{data.date}</p>
        <div className="flex flex-wrap gap-2">
          {data.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 border rounded border-[var(--app-green)] text-sm text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article className="prose prose-invert max-w-none">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypePrism],
            },
          }}
        />
      </article>

      <Link
        href="/blogs"
        className="inline-block mt-8 px-4 py-2 border rounded-md border-[var(--app-green)] text-[var(--app-green)] hover:bg-[var(--app-green)] hover:text-[var(--app-dark)] transition-colors"
      >
        ← Back to Blog
      </Link>
    </div>
  );
}
