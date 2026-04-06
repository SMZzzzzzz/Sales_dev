import type { Customer } from "@/domain/types";

export const mockCustomers: Customer[] = [
  {
    id: "c1",
    name: "株式会社アルファ",
    priority: "high",
    travelMinutes: 25,
    dealStage: "提案済み",
    nextActionHint: "価格条件のすり合わせ",
  },
  {
    id: "c2",
    name: "ベータ商事",
    priority: "medium",
    travelMinutes: 40,
    dealStage: "初回ヒアリング",
    nextActionHint: "課題の深掘り",
  },
  {
    id: "c3",
    name: "ガンマテック",
    priority: "high",
    travelMinutes: 15,
    dealStage: "見積提出前",
    nextActionHint: "決裁者アポの取得",
  },
];
