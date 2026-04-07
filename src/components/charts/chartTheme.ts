/**
 * Recharts 用カラー（Tailwind `bnb.*` / awesome-design-md airbnb DESIGN.md と同期）
 */
export const CHART = {
  ink: "#222222",
  muted: "#6a6a6a",
  surface: "#f2f2f2",
  border: "#c1c1c1",
  white: "#ffffff",
  rausch: "#ff385c",
  rauschDeep: "#e00b41",
  grid: "rgba(0, 0, 0, 0.06)",
  fontSize: 12,
  fontSizeAxis: 12,
} as const;

export const chartTooltipProps = {
  contentStyle: {
    backgroundColor: CHART.white,
    border: `1px solid ${CHART.border}`,
    borderRadius: 8,
    fontSize: CHART.fontSize,
    color: CHART.ink,
    boxShadow:
      "rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px",
  },
  labelStyle: { color: CHART.muted, fontWeight: 600 },
  itemStyle: { color: CHART.ink },
};
