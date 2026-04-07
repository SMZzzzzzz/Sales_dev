"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/cn";
import { CHART } from "./chartTheme";

const CHART_W = 200;
const CHART_H = 168;

interface GaugeProgressProps {
  /** 0〜1 */
  rate: number;
  className?: string;
}

export function GaugeProgress({ rate, className }: GaugeProgressProps) {
  const clamped = Math.min(1, Math.max(0, rate));
  const data =
    clamped >= 1
      ? [{ name: "達成", value: 1 }]
      : clamped <= 0
        ? [{ name: "残り", value: 1 }]
        : [
            { name: "達成", value: clamped },
            { name: "残り", value: 1 - clamped },
          ];

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-[200px] shrink-0 justify-center",
        className
      )}
    >
      <ResponsiveContainer width={CHART_W} height={CHART_H} minWidth={0}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-270}
            innerRadius={44}
            outerRadius={72}
            paddingAngle={0}
            dataKey="value"
            stroke={CHART.white}
            strokeWidth={2}
            isAnimationActive="auto"
            animationBegin={0}
            animationDuration={400}
            animationEasing="ease"
          >
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={entry.name === "達成" ? CHART.rausch : CHART.surface}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
