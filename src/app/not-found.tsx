import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-start justify-center gap-4 px-6">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="font-display text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted">This page does not exist. The portfolio is a single page.</p>
      <Link href="/" className="rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-bg">
        Go to home
      </Link>
    </main>
  );
}
