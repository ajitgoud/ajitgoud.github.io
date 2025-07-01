import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllBlogMeta(): BlogMeta[] {
  const files = fs.readdirSync(BLOG_DIR);
  return files.map((file) => {
    const content = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(content);
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags,
    } as BlogMeta;
  });
}
