"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CHART, chartTooltipProps } from "./chartTheme";

interface RevenueRiskBarChartProps {
  revenueMillionYen: number;
  riskMillionYen: number;
  className?: string;
}

export function RevenueRiskBarChart({
  revenueMillionYen,
  riskMillionYen,
  className,
}: RevenueRiskBarChartProps) {
  const data = [
    { name: "売上見込み", value: revenueMillionYen },
    { name: "未達リスク", value: riskMillionYen },
  ];

  return (
    <div className={`h-[200px] w-full ${className ?? ""}`}>
      <ResponsiveContainer width="100%" height={200} minWidth={0}>
        <BarChart
          data={data}
          margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
        >
          <CartesianGrid stroke={CHART.grid} vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: CHART.muted, fontSize: CHART.fontSizeAxis }}
            tickLine={false}
            axisLine={{ stroke: CHART.border }}
          />
          <YAxis
            tick={{ fill: CHART.muted, fontSize: CHART.fontSizeAxis }}
            tickLine={false}
            axisLine={{ stroke: CHART.border }}
            label={{
              value: "百万円",
              position: "insideLeft",
              fill: CHART.muted,
              fontSize: 11,
            }}
          />
          <Tooltip
            {...chartTooltipProps}
            formatter={(value) => [`${Number(value ?? 0)} 百万円`, ""]}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={56}>
            {data.map((_, i) => (
              <Cell
                key={i}
                fill={i === 0 ? CHART.ink : CHART.rausch}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
