"use client";

import { KpiGroupedBarChart } from "@/components/charts/KpiGroupedBarChart";
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
      <CardContent className="space-y-6">
        <div>
          <p className="micro-label mb-3">目標と実績の比較（サマリ）</p>
          <KpiGroupedBarChart kpis={sorted} />
        </div>
        <div className="space-y-5 border-t border-black/[0.06] pt-5">
          <p className="text-xs font-semibold text-bnb-muted">内訳（件数）</p>
          {sorted.map((k) => {
            const ratio = kpiAchievementRatio(k.actual, k.target);
            const pctLabel = formatRatioAsPercent(ratio, 0);
            return (
              <div key={k.id} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="text-sm font-semibold text-bnb-ink">
                  {k.name}
                </span>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-lg font-bold tabular-nums tracking-tight text-bnb-ink">
                    {formatNumber(k.actual)}
                    <span className="mx-0.5 font-semibold text-bnb-muted">
                      /
                    </span>
                    {formatNumber(k.target)}
                    <span className="text-base font-semibold">{k.unit}</span>
                  </span>
                  <span className="text-sm font-medium text-bnb-muted">
                    （{pctLabel}）
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
