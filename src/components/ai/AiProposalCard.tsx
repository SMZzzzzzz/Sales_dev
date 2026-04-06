"use client";

import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import type { AiProposal } from "@/domain/types";

interface AiProposalCardProps {
  proposal: AiProposal | null;
}

export function AiProposalCard({ proposal }: AiProposalCardProps) {
  if (!proposal) {
    return (
      <Card className="border border-dashed border-bnb-border">
        <CardContent className="py-10 text-center text-sm text-bnb-muted">
          提案を計算しています…
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-3 bg-bnb-surface/40">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bnb-white text-bnb-rausch shadow-airbnb-card">
          <Sparkles className="h-5 w-5" aria-hidden strokeWidth={2} />
        </span>
        <CardTitle className="!text-[1.25rem] !leading-tight !tracking-[-0.18px]">
          AIによる次の一手
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <p className="micro-label text-bnb-rausch">推奨アクション</p>
          <p className="mt-2 text-lg font-semibold leading-tight text-bnb-ink">
            {proposal.primaryAction}
          </p>
        </div>
        {proposal.reasons.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-bnb-muted">理由</p>
            <ul className="mt-2 list-inside list-disc text-sm leading-[1.43] text-bnb-ink">
              {proposal.reasons.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
        {proposal.alternativeActions.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-bnb-muted">次点の候補</p>
            <ul className="mt-2 space-y-1.5 text-sm leading-[1.43] text-bnb-ink">
              {proposal.alternativeActions.map((a, i) => (
                <li key={i} className="flex gap-2">
                  <span className="font-mono text-xs text-bnb-muted">
                    {i + 1}.
                  </span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="text-xs text-bnb-muted">
          状況タグ: {proposal.situationSummary} ・ 更新{" "}
          {new Date(proposal.computedAt).toLocaleString("ja-JP")}
        </p>
      </CardContent>
    </Card>
  );
}
