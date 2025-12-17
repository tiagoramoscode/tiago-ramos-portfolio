import Link from "next/link";

export function Button({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block bg-zinc-100 text-zinc-900 px-6 py-3 rounded-2xl font-semibold hover:bg-zinc-200 transition-colors"
    >
      {children}
    </Link>
  );
}