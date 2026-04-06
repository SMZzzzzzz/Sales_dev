"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import type { Kpi } from "@/domain/types";
import { formatNumber, formatRatioAsPercent, kpiAchievementRatio } from "@/lib/format";

interface KpiSectionProps {
  kpis: Kpi[];
}

export function KpiSection({ kpis }: KpiSectionProps) {
  const sorted = [...kpis].sort((a, b) => a.order - b.order);
  return (
    <Card>
      <CardHeader>
        <CardTitle>本日のKPI</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {sorted.map((k) => {
          const ratio = kpiAchievementRatio(k.actual, k.target);
          const pctLabel = formatRatioAsPercent(ratio, 0);
          return (
            <div key={k.id}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-bnb-ink">{k.name}</span>
                <span className="text-bnb-muted">
                  {formatNumber(k.actual)} / {formatNumber(k.target)}
                  {k.unit}（{pctLabel}）
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-bnb-surface">
                <div
                  className="h-full rounded-full bg-bnb-rausch transition-all"
                  style={{ width: `${Math.round(ratio * 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
