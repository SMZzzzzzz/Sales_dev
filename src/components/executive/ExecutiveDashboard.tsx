"use client";

import { mockExecutiveSummary } from "@/data/mock";
import { SummaryCards } from "./SummaryCards";

export function ExecutiveDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading-section">経営ダッシュボード</h1>
        <p className="mt-2 text-body">
          全体の数字とリスクのサマリー（モック）
        </p>
      </div>
      <SummaryCards {...mockExecutiveSummary} />
    </div>
  );
}
