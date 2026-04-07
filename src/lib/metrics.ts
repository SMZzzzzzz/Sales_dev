import type { Kpi } from "@/domain/types";
import { kpiAchievementRatio } from "@/lib/format";

export function averageAchievement(userId: string, kpis: Kpi[]): number | null {
  const list = kpis.filter((k) => k.userId === userId && k.active);
  if (list.length === 0) return null;
  const sum = list.reduce(
    (acc, k) => acc + kpiAchievementRatio(k.actual, k.target),
    0
  );
  return sum / list.length;
}

export function memberAchievementData(
  members: { id: string; name: string }[],
  kpis: Kpi[]
): { name: string; ratePercent: number }[] {
  return members.map((m) => {
    const avg = averageAchievement(m.id, kpis);
    return {
      name: m.name,
      ratePercent: avg != null ? Math.round(avg * 100) : 0,
    };
  });
}
