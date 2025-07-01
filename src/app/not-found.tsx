'use client';

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4 text-center space-y-4">
      <h1 className="text-6xl md:text-8xl font-bold text-[var(--app-green)]">
        404
      </h1>
      <p className="text-xl md:text-2xl text-slate-400">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 border rounded-md border-[var(--app-green)] text-[var(--app-green)] hover:bg-[var(--app-green)] hover:text-[var(--app-dark)] transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
