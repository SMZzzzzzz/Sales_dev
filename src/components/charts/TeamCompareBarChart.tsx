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

interface TeamCompareBarChartProps {
  teamEastRate: number;
  teamWestRate: number;
  className?: string;
}

export function TeamCompareBarChart({
  teamEastRate,
  teamWestRate,
  className,
}: TeamCompareBarChartProps) {
  const data = [
    { name: "東部チーム", rate: Math.round(teamEastRate * 100) },
    { name: "西部チーム", rate: Math.round(teamWestRate * 100) },
  ];

  return (
    <div className={`h-[180px] w-full ${className ?? ""}`}>
      <ResponsiveContainer width="100%" height={180} minWidth={0}>
        <BarChart
          data={data}
          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke={CHART.grid} vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: CHART.muted, fontSize: CHART.fontSizeAxis }}
            tickLine={false}
            axisLine={{ stroke: CHART.border }}
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
            tick={{ fill: CHART.muted, fontSize: CHART.fontSizeAxis }}
            tickLine={false}
            axisLine={{ stroke: CHART.border }}
          />
          <Tooltip
            {...chartTooltipProps}
            formatter={(value) => [`${Number(value ?? 0)}%`, "達成率"]}
          />
          <Bar dataKey="rate" fill={CHART.rausch} radius={[6, 6, 0, 0]} maxBarSize={48} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
