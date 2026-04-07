"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import type { Kpi, User } from "@/domain/types";
import { formatRatioAsPercent } from "@/lib/format";
import { averageAchievement } from "@/lib/metrics";
import { cn } from "@/lib/cn";

interface MemberTableProps {
  users: User[];
  kpis: Kpi[];
}

const statusLabel: Record<User["status"], string> = {
  active: "順調",
  at_risk: "要注意",
  inactive: "停滞傾向",
};

const statusClass: Record<User["status"], string> = {
  active: "bg-bnb-surface text-bnb-ink ring-1 ring-black/[0.06]",
  at_risk:
    "bg-bnb-white text-bnb-ink ring-1 ring-bnb-rausch/35 shadow-airbnb-card",
  inactive: "border border-bnb-border bg-bnb-white text-bnb-muted",
};

export function MemberTable({ users, kpis }: MemberTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>メンバー一覧</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto p-0">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead className="border-b border-black/[0.06] bg-bnb-surface text-[11px] font-semibold uppercase tracking-wide text-bnb-muted">
            <tr>
              <th className="px-5 py-3">メンバー</th>
              <th className="px-5 py-3">チーム</th>
              <th className="px-5 py-3">達成率（平均）</th>
              <th className="px-5 py-3">ステータス</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              const avg = averageAchievement(u.id, kpis);
              return (
                <tr
                  key={u.id}
                  className="border-b border-black/[0.04] last:border-0"
                >
                  <td className="px-5 py-3.5 font-semibold text-bnb-ink">
                    {u.name}
                  </td>
                  <td className="px-5 py-3.5 text-bnb-muted">{u.teamId}</td>
                  <td className="px-5 py-3.5 text-bnb-ink">
                    {avg != null ? formatRatioAsPercent(avg, 0) : "—"}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={cn(
                        "inline-flex rounded-bnb-badge px-2.5 py-1 text-xs font-semibold",
                        statusClass[u.status]
                      )}
                    >
                      {statusLabel[u.status]}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
