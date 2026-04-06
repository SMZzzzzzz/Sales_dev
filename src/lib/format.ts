/** ratio は 0〜1（例: 0.75 = 75%） */
export function formatRatioAsPercent(ratio: number, fractionDigits = 0): string {
  return new Intl.NumberFormat("ja-JP", {
    style: "percent",
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
  }).format(ratio);
}

export function kpiAchievementRatio(actual: number, target: number): number {
  if (target <= 0) return 0;
  return Math.min(1, actual / target);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("ja-JP").format(value);
}

export function formatCurrencyJpy(value: number): string {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(value);
}
