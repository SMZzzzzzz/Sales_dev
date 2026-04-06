"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/cn";

const items = [
  { href: "/sales", label: "営業ダッシュボード", icon: LayoutDashboard },
  { href: "/manager", label: "管理者", icon: Users },
  { href: "/executive", label: "経営", icon: TrendingUp },
] as const;

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="space-y-0.5 p-2" aria-label="メインメニュー">
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-bnb-btn px-3 py-2.5 text-base font-medium transition-colors",
              active
                ? "bg-bnb-surface text-bnb-ink shadow-airbnb-card"
                : "text-bnb-muted hover:bg-bnb-surface/70 hover:text-bnb-ink"
            )}
          >
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bnb-surface text-bnb-ink transition-shadow",
                active && "shadow-airbnb-hover ring-2 ring-bnb-white"
              )}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
            </span>
            <span className="leading-tight">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
