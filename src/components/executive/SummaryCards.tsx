"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { formatRatioAsPercent } from "@/lib/format";

interface SummaryCardsProps {
  companyAchievementRate: number;
  revenueForecastMillionYen: number;
  shortfallRiskMillionYen: number;
  teamEastRate: number;
  teamWestRate: number;
  monthEndForecastNote: string;
}

export function SummaryCards({
  companyAchievementRate,
  revenueForecastMillionYen,
  shortfallRiskMillionYen,
  teamEastRate,
  teamWestRate,
  monthEndForecastNote,
}: SummaryCardsProps) {
  const items = [
    {
      label: "全体達成率（簡易）",
      value: formatRatioAsPercent(companyAchievementRate, 0),
      sub: "主要KPIの加重平均イメージ",
    },
    {
      label: "売上見込み",
      value: `${revenueForecastMillionYen}百万円`,
      sub: "当月コミットベース",
    },
    {
      label: "未達リスク（概算）",
      value: `${shortfallRiskMillionYen}百万円`,
      sub: "目標比のギャップ感",
    },
    {
      label: "チーム別",
      value: `東 ${formatRatioAsPercent(teamEastRate, 0)} / 西 ${formatRatioAsPercent(teamWestRate, 0)}`,
      sub: "粗い対比",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <Card key={item.label}>
          <CardContent className="pt-6">
            <p className="micro-label">{item.label}</p>
            <p className="mt-3 text-[1.75rem] font-bold leading-[1.2] tracking-tight text-bnb-ink">
              {item.value}
            </p>
            <p className="mt-2 text-xs leading-[1.23] text-bnb-muted">
              {item.sub}
            </p>
          </CardContent>
        </Card>
      ))}
      <Card className="sm:col-span-2">
        <CardContent className="pt-6">
          <p className="micro-label">今月着地予測メモ</p>
          <p className="mt-3 text-sm font-medium leading-[1.43] text-bnb-ink">
            {monthEndForecastNote}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
