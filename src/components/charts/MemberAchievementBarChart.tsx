"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CHART, chartTooltipProps } from "./chartTheme";

export interface MemberAchievementDatum {
  name: string;
  /** 0〜100 の百分率 */
  ratePercent: number;
}

interface MemberAchievementBarChartProps {
  data: MemberAchievementDatum[];
  className?: string;
}

export function MemberAchievementBarChart({
  data,
  className,
}: MemberAchievementBarChartProps) {
  if (data.length === 0) {
    return (
      <div
        className={`flex h-[160px] items-center justify-center text-sm text-bnb-muted ${className ?? ""}`}
      >
        メンバーがありません
      </div>
    );
  }

  const height = Math.min(320, 48 + data.length * 40);

  return (
    <div className={`w-full ${className ?? ""}`} style={{ height }}>
      <ResponsiveContainer width="100%" height={height} minWidth={0}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
        >
          <CartesianGrid stroke={CHART.grid} horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
            tick={{ fill: CHART.muted, fontSize: CHART.fontSizeAxis }}
            axisLine={{ stroke: CHART.border }}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={100}
            tick={{ fill: CHART.ink, fontSize: CHART.fontSizeAxis, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            {...chartTooltipProps}
            formatter={(value) => [`${Number(value ?? 0)}%`, "平均達成率"]}
          />
          <Bar
            dataKey="ratePercent"
            fill={CHART.rausch}
            radius={[0, 6, 6, 0]}
            maxBarSize={22}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
