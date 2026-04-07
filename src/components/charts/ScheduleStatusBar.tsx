"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ScheduleSlot } from "@/domain/types";
import { getScheduleFrameCounts } from "@/lib/scheduleCounts";
import { CHART, chartTooltipProps } from "./chartTheme";

interface ScheduleStatusBarProps {
  schedules: ScheduleSlot[];
  className?: string;
}

export function ScheduleStatusBar({
  schedules,
  className,
}: ScheduleStatusBarProps) {
  const { total, active, cancelled, empty } = getScheduleFrameCounts(schedules);

  const data =
    total > 0
      ? [
          {
            name: "本日の枠",
            実施予定: active,
            キャンセル: cancelled,
            空き枠: empty,
          },
        ]
      : [{ name: "本日の枠", 実施予定: 0, キャンセル: 0, 空き枠: 0 }];

  return (
    <div className={`h-[72px] w-full ${className ?? ""}`}>
      <ResponsiveContainer width="100%" height={72} minWidth={0}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
        >
          <XAxis type="number" hide domain={[0, Math.max(total, 1)]} />
          <YAxis
            type="category"
            dataKey="name"
            width={88}
            tick={{ fill: CHART.muted, fontSize: CHART.fontSizeAxis }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip {...chartTooltipProps} />
          <Bar
            dataKey="実施予定"
            stackId="a"
            fill={CHART.ink}
            radius={[4, 0, 0, 0]}
          />
          <Bar
            dataKey="キャンセル"
            stackId="a"
            fill={CHART.rausch}
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="空き枠"
            stackId="a"
            fill={CHART.surface}
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
