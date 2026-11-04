import Link from "next/link";

export function Button({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="button"
    >
      {children}
    </Link>
  );
}