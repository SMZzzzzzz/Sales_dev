"use client";

import { GaugeProgress } from "@/components/charts/GaugeProgress";
import { RevenueRiskBarChart } from "@/components/charts/RevenueRiskBarChart";
import { TeamCompareBarChart } from "@/components/charts/TeamCompareBarChart";
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
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card>
        <CardContent className="pt-6">
          <p className="micro-label">主要KPI達成率（簡易）</p>
          <p className="mt-2 text-[1.75rem] font-bold leading-[1.2] tracking-tight text-bnb-ink">
            {formatRatioAsPercent(companyAchievementRate, 0)}
          </p>
          <GaugeProgress rate={companyAchievementRate} className="mt-1" />
          <p className="mt-1 text-xs leading-[1.23] text-bnb-muted">
            対象は主要KPIのみ
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <p className="micro-label">売上見込みと未達リスク</p>
          <p className="mt-2 text-sm font-medium text-bnb-ink">
            見込み{" "}
            <span className="text-lg font-bold tabular-nums">
              {revenueForecastMillionYen}
            </span>{" "}
            百万円
            <span className="mx-2 text-bnb-muted">/</span>
            リスク{" "}
            <span className="text-lg font-bold tabular-nums text-bnb-rausch">
              {shortfallRiskMillionYen}
            </span>{" "}
            百万円
          </p>
          <RevenueRiskBarChart
            revenueMillionYen={revenueForecastMillionYen}
            riskMillionYen={shortfallRiskMillionYen}
            className="mt-3"
          />
          <p className="mt-2 text-xs text-bnb-muted">当月コミットベース（モック）</p>
        </CardContent>
      </Card>

      <Card className="sm:col-span-2">
        <CardContent className="pt-6">
          <p className="micro-label">チーム別達成率</p>
          <p className="mt-2 text-sm font-medium text-bnb-ink">
            東 {formatRatioAsPercent(teamEastRate, 0)} ・ 西{" "}
            {formatRatioAsPercent(teamWestRate, 0)}
          </p>
          <TeamCompareBarChart
            teamEastRate={teamEastRate}
            teamWestRate={teamWestRate}
            className="mt-3"
          />
          <p className="mt-2 text-xs text-bnb-muted">粗い対比（モック）</p>
        </CardContent>
      </Card>

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
