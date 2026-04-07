"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Kpi } from "@/domain/types";
import { CHART, chartTooltipProps } from "./chartTheme";

interface KpiGroupedBarChartProps {
  kpis: Kpi[];
  className?: string;
}

export function KpiGroupedBarChart({ kpis, className }: KpiGroupedBarChartProps) {
  const sorted = [...kpis].sort((a, b) => a.order - b.order);
  const data = sorted.map((k) => ({
    name: k.name,
    目標: k.target,
    実績: k.actual,
  }));

  if (data.length === 0) {
    return (
      <div
        className={`flex h-[200px] items-center justify-center text-sm text-bnb-muted ${className ?? ""}`}
      >
        KPI データがありません
      </div>
    );
  }

  return (
    <div className={`h-[220px] w-full ${className ?? ""}`}>
      <ResponsiveContainer width="100%" height={220} minWidth={0}>
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
            tick={{ fill: CHART.muted, fontSize: CHART.fontSizeAxis }}
            tickLine={false}
            axisLine={{ stroke: CHART.border }}
            allowDecimals={false}
          />
          <Tooltip {...chartTooltipProps} />
          <Legend
            wrapperStyle={{ fontSize: CHART.fontSize }}
            formatter={(value) => (
              <span style={{ color: CHART.ink, fontWeight: 500 }}>{value}</span>
            )}
          />
          <Bar
            dataKey="目標"
            fill={CHART.ink}
            radius={[6, 6, 0, 0]}
            maxBarSize={36}
          />
          <Bar
            dataKey="実績"
            fill={CHART.rausch}
            radius={[6, 6, 0, 0]}
            maxBarSize={36}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
