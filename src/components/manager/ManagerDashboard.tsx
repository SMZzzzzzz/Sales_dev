"use client";

import { MemberAchievementBarChart } from "@/components/charts/MemberAchievementBarChart";
import { mockKpis, mockUsers } from "@/data/mock";
import { memberAchievementData } from "@/lib/metrics";
import { MemberTable } from "./MemberTable";

export function ManagerDashboard() {
  const salesUsers = mockUsers.filter((u) => u.role === "sales");
  const chartData = memberAchievementData(
    salesUsers.map((u) => ({ id: u.id, name: u.name })),
    mockKpis
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading-section">管理者画面</h1>
        <p className="mt-2 text-body">
          チームの進捗と介入ポイントの俯瞰（モックデータ）
        </p>
      </div>

      <div className="rounded-bnb-card bg-bnb-white p-5 shadow-airbnb-card">
        <p className="micro-label">メンバー別・平均達成率（サマリ）</p>
        <p className="mt-1 text-xs text-bnb-muted">
          主要KPIの平均達成率を横棒で比較（一覧の詳細は下表）
        </p>
        <MemberAchievementBarChart data={chartData} className="mt-4" />
      </div>

      <MemberTable users={salesUsers} kpis={mockKpis} />
    </div>
  );
}
