import type { Kpi } from "@/domain/types";

export const mockKpis: Kpi[] = [
  {
    id: "k1",
    userId: "u1",
    name: "新規商談",
    target: 10,
    actual: 6,
    unit: "件",
    order: 1,
    active: true,
  },
  {
    id: "k2",
    userId: "u1",
    name: "訪問件数",
    target: 8,
    actual: 5,
    unit: "件",
    order: 2,
    active: true,
  },
  {
    id: "k3",
    userId: "u2",
    name: "新規商談",
    target: 10,
    actual: 4,
    unit: "件",
    order: 1,
    active: true,
  },
  {
    id: "k4",
    userId: "u3",
    name: "新規商談",
    target: 10,
    actual: 9,
    unit: "件",
    order: 1,
    active: true,
  },
];
