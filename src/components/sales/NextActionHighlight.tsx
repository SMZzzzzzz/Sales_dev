"use client";

import { ArrowRight } from "lucide-react";
import type { AiProposal } from "@/domain/types";

interface NextActionHighlightProps {
  proposal: AiProposal | null;
}

export function NextActionHighlight({ proposal }: NextActionHighlightProps) {
  return (
    <section
      className="rounded-bnb-lg border border-black/[0.06] bg-bnb-white p-6 shadow-airbnb-card"
      aria-labelledby="next-action-heading"
    >
      <div className="flex gap-4">
        <div
          className="hidden w-1 shrink-0 rounded-full bg-bnb-rausch sm:block"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p id="next-action-heading" className="micro-label text-bnb-rausch">
            次にやること
          </p>
          {proposal ? (
            <div className="mt-3 flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bnb-surface text-bnb-ink shadow-airbnb-card">
                <ArrowRight className="h-5 w-5" aria-hidden strokeWidth={2} />
              </span>
              <p className="text-xl font-semibold leading-[1.2] tracking-[-0.18px] text-bnb-ink">
                {proposal.primaryAction}
              </p>
            </div>
          ) : (
            <p className="mt-3 text-body">読み込み中…</p>
          )}
        </div>
      </div>
    </section>
  );
}
