"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const roles = [
  { href: "/sales", label: "営業" },
  { href: "/manager", label: "管理者" },
  { href: "/executive", label: "経営" },
] as const;

export function RoleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <nav
      className={cn("flex flex-wrap items-center gap-1", className)}
      aria-label="デモ用ロール切替"
    >
      {roles.map((r) => {
        const active = pathname === r.href;
        return (
          <Link
            key={r.href}
            href={r.href}
            className={cn(
              "rounded-bnb-btn px-3 py-2 text-sm font-semibold transition-colors",
              active
                ? "text-bnb-ink shadow-airbnb-card ring-1 ring-black/[0.06]"
                : "text-bnb-muted hover:bg-bnb-surface hover:text-bnb-ink"
            )}
          >
            {active && (
              <span
                className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-bnb-rausch align-middle"
                aria-hidden
              />
            )}
            {r.label}
          </Link>
        );
      })}
    </nav>
  );
}
