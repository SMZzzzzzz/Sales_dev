import type { Customer, Kpi } from "../types";

/** 目標に対する達成率が threshold 未満の KPI */
export function getUnderperformingKpis(
  kpis: Kpi[],
  threshold = 0.9
): Kpi[] {
  return kpis.filter(
    (k) => k.active && k.target > 0 && k.actual < k.target * threshold
  );
}

/** 高優先かつ移動負荷が小さい顧客を1件選ぶ（デモ用ヒューリスティック） */
export function pickNearestHighPriorityCustomer(
  customers: Customer[]
): Customer | undefined {
  const highs = customers.filter((c) => c.priority === "high");
  if (highs.length === 0) return undefined;
  return [...highs].sort((a, b) => a.travelMinutes - b.travelMinutes)[0];
}
