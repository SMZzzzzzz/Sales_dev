import type { AiProposal, ProposalInput } from "../types";
import { getUnderperformingKpis, pickNearestHighPriorityCustomer } from "./rules";

/**
 * デモ用ルールベース提案（Input.md 9章の方針に沿った簡易版）
 */
export function suggestNextActions(input: ProposalInput): AiProposal {
  const computedAt = new Date().toISOString();
  const under = getUnderperformingKpis(input.kpis);
  const reasons: string[] = [];
  const alternativeActions: string[] = [];

  let primaryAction =
    "本日の訪問・架電予定を確認し、優先顧客へのアプローチを進めてください。";
  let situationSummary = "順調";

  if (under.length > 0) {
    const k = under[0];
    primaryAction = `「${k.name}」が未達寄りです。成果に直結する商談フォローまたは新規アポ獲得を最優先にしてください。`;
    reasons.push(
      `${k.name}の実績（${k.actual}${k.unit}）が目標（${k.target}${k.unit}）の9割を下回っています`
    );
    situationSummary = "KPI未達寄り";
  }

  if (input.hasCancellation) {
    primaryAction =
      "キャンセルで空いた枠を活用し、近隣・高優先度の顧客へのフォローを最優先にしてください。";
    reasons.push("当日の訪問にキャンセルが含まれています");
    situationSummary =
      under.length > 0 ? "KPI未達寄り・キャンセルあり" : "キャンセル発生";

    const c = pickNearestHighPriorityCustomer(input.customers);
    if (c) {
      alternativeActions.push(
        `${c.name}へ架電（${c.dealStage}・移動目安${c.travelMinutes}分圏内）`
      );
    }
    alternativeActions.push("オンライン商談への切り替えと資料送付");
    alternativeActions.push("次回訪問アポの確定");
  }

  if (!input.hasCancellation && under.length === 0) {
    reasons.push("主要KPIは目標範囲内です");
    alternativeActions.push("翌日以降のアポ枠の確保");
    alternativeActions.push("パイプラインの見直しと優先順位付け");
  }

  return {
    primaryAction,
    alternativeActions: alternativeActions.slice(0, 3),
    reasons: reasons.slice(0, 3),
    computedAt,
    situationSummary,
  };
}
