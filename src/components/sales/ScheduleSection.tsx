"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { ScheduleSlot } from "@/domain/types";

interface ScheduleSectionProps {
  schedules: ScheduleSlot[];
  onToggleCancel: (slotId: string) => void;
}

export function ScheduleSection({
  schedules,
  onToggleCancel,
}: ScheduleSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>今日の予定</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
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
                      : "text-sm text-bnb-muted"
                  }
                >
                  {s.place}
                </p>
                {s.cancelled && (
                  <p className="mt-1 text-xs font-semibold text-bnb-error">
                    キャンセル
                  </p>
                )}
              </div>
              <Button
                type="button"
                variant={s.cancelled ? "secondary" : "outline"}
                size="sm"
                onClick={() => onToggleCancel(s.id)}
              >
                {s.cancelled ? "予定を復帰" : "キャンセルにする"}
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
