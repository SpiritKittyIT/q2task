"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  return (
    <div className="flex justify-between gap-10 font-bold text-xs">
      <NavLink href="/posts" label="Blog" activePattern={/^\/posts(\/(?!new)[^/]+)?$/} />
      <NavLink href="/posts/new" label="Přidat článek"  activePattern={/^\/posts\/new$/} />
    </div>
  )
}

type NavLinkProps = {
  href: string;
  label: string;
  activePattern: RegExp;
};

function NavLink({ href, label, activePattern }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = activePattern.test(pathname);

  return (
    <div className={`p-1 border-b-3 ${isActive ? "border-[var(--highlight)]" : "border-transparent"}`}>
      <Link
        href={href}
      >
        {label}
      </Link>
    </div>
  );
}