import type { ScheduleSlot } from "@/domain/types";

export const mockSchedules: ScheduleSlot[] = [
  {
    id: "s1",
    userId: "u1",
    start: "10:00",
    end: "11:00",
    place: "株式会社アルファ（本社）",
    cancelled: false,
  },
  {
    id: "s2",
    userId: "u1",
    start: "13:00",
    end: "14:30",
    place: "ベータ商事 支店",
    cancelled: false,
  },
  {
    id: "s3",
    userId: "u1",
    start: "15:30",
    end: "16:00",
    place: "オンライン商談",
    cancelled: false,
  },
];
