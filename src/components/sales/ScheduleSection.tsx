"use client";

import { ScheduleStatusBar } from "@/components/charts/ScheduleStatusBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { ScheduleSlot } from "@/domain/types";
import { getScheduleFrameCounts } from "@/lib/scheduleCounts";

interface ScheduleSectionProps {
  schedules: ScheduleSlot[];
  onToggleCancel: (slotId: string) => void;
}

export function ScheduleSection({
  schedules,
  onToggleCancel,
}: ScheduleSectionProps) {
  const { total, active: activeCount, cancelled: cancelledCount } =
    getScheduleFrameCounts(schedules);

  return (
    <Card>
      <CardHeader>
        <CardTitle>今日の予定</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="micro-label mb-2">枠の消化（サマリ）</p>
          <ScheduleStatusBar schedules={schedules} />
          <p className="mt-2 text-sm font-medium text-bnb-ink">
            本日 <span className="tabular-nums">{total}</span> 枠
            <span className="text-bnb-muted"> ・ </span>
            実施予定 <span className="tabular-nums">{activeCount}</span> 枠
            <span className="text-bnb-muted"> ・ </span>
            キャンセル{" "}
            <span className="tabular-nums text-bnb-error">{cancelledCount}</span>{" "}
            枠
          </p>
        </div>
        <p className="text-xs leading-[1.23] text-bnb-muted">
          デモ用: 各行のボタンでキャンセル状態を切り替え、AI提案が更新されます。
        </p>
        <ul className="space-y-2">
          {schedules.map((s) => (
            <li
              key={s.id}
              className="flex flex-col gap-3 rounded-bnb-badge border border-black/[0.06] bg-bnb-surface/50 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-base font-semibold text-bnb-ink">
                  {s.start}–{s.end}
                </p>
                <p
                  className={
                    s.cancelled
                      ? "text-sm text-bnb-error line-through"
                      : !s.booked
                        ? "text-sm font-medium text-bnb-muted"
                        : "text-sm text-bnb-muted"
                  }
                >
                  {!s.booked ? "空き枠（予定未設定）" : s.place}
                </p>
                {s.cancelled && (
                  <p className="mt-1 text-xs font-semibold text-bnb-error">
                    キャンセル
                  </p>
                )}
              </div>
              {s.booked ? (
                <Button
                  type="button"
                  variant={s.cancelled ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => onToggleCancel(s.id)}
                >
                  {s.cancelled ? "予定を復帰" : "キャンセルにする"}
                </Button>
              ) : (
                <span className="shrink-0 text-xs font-medium text-bnb-muted">
                  —
                </span>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
