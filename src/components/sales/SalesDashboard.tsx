"use client";

import { useEffect, useState } from "react";
import { AiProposalCard } from "@/components/ai/AiProposalCard";
import { AiProposalModal } from "@/components/ai/AiProposalModal";
import { Button } from "@/components/ui/Button";
import { mockKpis } from "@/data/mock";
import { SALES_USER_ID, useDemoStore } from "@/store/demoStore";
import { KpiSection } from "./KpiSection";
import { NextActionHighlight } from "./NextActionHighlight";
import { ScheduleSection } from "./ScheduleSection";

export function SalesDashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const schedules = useDemoStore((s) => s.schedules);
  const lastProposal = useDemoStore((s) => s.lastProposal);
  const recomputeProposal = useDemoStore((s) => s.recomputeProposal);
  const toggleSlotCancel = useDemoStore((s) => s.toggleSlotCancel);

  useEffect(() => {
    recomputeProposal();
  }, [recomputeProposal]);

  const kpis = mockKpis.filter((k) => k.userId === SALES_USER_ID);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading-section">営業ダッシュボード</h1>
        <p className="mt-2 text-body">
          山田 太郎（東部チーム）の今日の状況とAI提案
        </p>
      </div>

      <NextActionHighlight proposal={lastProposal} />

      <div className="grid gap-6 lg:grid-cols-2">
        <KpiSection kpis={kpis} />
        <ScheduleSection
          schedules={schedules}
          onToggleCancel={toggleSlotCancel}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="heading-card">提案の詳細</h2>
        <Button
          type="button"
          variant="dark"
          size="sm"
          className="h-9 px-4 text-sm"
          onClick={() => setModalOpen(true)}
        >
          モーダルで表示
        </Button>
      </div>
      <AiProposalCard proposal={lastProposal} />

      <AiProposalModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        proposal={lastProposal}
      />
    </div>
  );
}
