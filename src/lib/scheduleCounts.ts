import type { ScheduleSlot } from "@/domain/types";

/** 本日の枠数・実施予定・キャンセル・空き（未予定の枠） */
export function getScheduleFrameCounts(schedules: ScheduleSlot[]) {
  const total = schedules.length;
  const active = schedules.filter((s) => s.booked && !s.cancelled).length;
  const cancelled = schedules.filter((s) => s.booked && s.cancelled).length;
  const empty = schedules.filter((s) => !s.booked).length;
  return { total, active, cancelled, empty };
}
