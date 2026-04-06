"use client";

import type { ReactNode } from "react";
import { MainNav } from "./MainNav";
import { RoleSwitcher } from "./RoleSwitcher";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-bnb-white">
      <aside className="hidden w-[220px] shrink-0 border-r border-bnb-border bg-bnb-white md:flex md:flex-col">
        <div className="flex h-16 items-center px-4">
          <span className="text-base font-semibold tracking-tight text-bnb-ink">
            営業最適化
            <span className="text-bnb-rausch">.</span>
            デモ
          </span>
        </div>
        <MainNav />
        <div className="mt-auto border-t border-black/[0.06] p-3">
          <p className="micro-label mb-2 px-1">視点切替</p>
          <RoleSwitcher className="flex-col items-stretch gap-1" />
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between gap-2 border-b border-bnb-border bg-bnb-white px-4 md:hidden">
          <span className="text-sm font-semibold text-bnb-ink">
            営業最適化デモ
          </span>
          <RoleSwitcher />
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 md:px-8 md:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
