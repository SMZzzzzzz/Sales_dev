"use client";

import { mockKpis, mockUsers } from "@/data/mock";
import { MemberTable } from "./MemberTable";

export function ManagerDashboard() {
  const salesUsers = mockUsers.filter((u) => u.role === "sales");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading-section">管理者画面</h1>
        <p className="mt-2 text-body">
          チームの進捗と介入ポイントの俯瞰（モックデータ）
        </p>
      </div>
      <MemberTable users={salesUsers} kpis={mockKpis} />
    </div>
  );
}
