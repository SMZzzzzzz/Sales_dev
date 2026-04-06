"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import type { AiProposal } from "@/domain/types";

interface AiProposalModalProps {
  open: boolean;
  onClose: () => void;
  proposal: AiProposal | null;
}

export function AiProposalModal({
  open,
  onClose,
  proposal,
}: AiProposalModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-proposal-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-bnb-card bg-bnb-white shadow-airbnb-card">
        <div className="flex items-center justify-between border-b border-black/[0.06] px-5 py-4">
          <h2
            id="ai-proposal-modal-title"
            className="text-base font-semibold text-bnb-ink"
          >
            AI提案の詳細
          </h2>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-9 w-9 shrink-0 rounded-full p-0"
            onClick={onClose}
            aria-label="閉じる"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </Button>
        </div>
        <div className="max-h-[70vh] space-y-4 overflow-y-auto p-5 text-sm leading-[1.43]">
          {!proposal ? (
            <p className="text-bnb-muted">提案を読み込み中です…</p>
          ) : (
            <>
              <div>
                <p className="micro-label text-bnb-rausch">推奨アクション</p>
                <p className="mt-2 font-semibold text-bnb-ink">
                  {proposal.primaryAction}
                </p>
              </div>
              {proposal.reasons.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-bnb-muted">理由</p>
                  <ul className="mt-2 list-inside list-disc text-bnb-ink">
                    {proposal.reasons.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}
              {proposal.alternativeActions.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-bnb-muted">
                    次点の候補
                  </p>
                  <ol className="mt-2 list-decimal space-y-1 pl-4 text-bnb-ink">
                    {proposal.alternativeActions.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ol>
                </div>
              )}
              <p className="text-xs text-bnb-muted">
                {proposal.situationSummary} ・{" "}
                {new Date(proposal.computedAt).toLocaleString("ja-JP")}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
