'use client';

import { BlogMeta } from "@/utils/blogData";
import Link from "next/link";

export default function BlogList({ blogs }: { blogs: BlogMeta[] }) {
  return (
    <div className="space-y-4 md:space-y-16">
      <h1 className="text-4xl underline decoration-[var(--app-green)] underline-offset-8">
        Blogs
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-8 space-y-4 md:space-y-0">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="block p-6 rounded-lg hover:bg-[var(--app-dark)] hover:bg-opacity-20 transition"
          >
            <h2 className="text-2xl mb-2 text-[var(--app-green)]">{blog.title}</h2>
            <p className="text-slate-400 mb-4">{blog.excerpt}</p>
            <div className="flex flex-wrap text-sm text-slate-400 space-x-2">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 border rounded border-[var(--app-green)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">{blog.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
