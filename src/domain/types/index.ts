export type DemoRole = "sales" | "manager" | "executive";

export interface User {
  id: string;
  name: string;
  teamId: string;
  role: DemoRole;
  status: "active" | "at_risk" | "inactive";
}

export interface Kpi {
  id: string;
  userId: string;
  name: string;
  target: number;
  actual: number;
  unit: string;
  order: number;
  active: boolean;
}

export interface Customer {
  id: string;
  name: string;
  priority: "high" | "medium" | "low";
  travelMinutes: number;
  dealStage: string;
  nextActionHint: string;
}

export interface ScheduleSlot {
  id: string;
  userId: string;
  start: string;
  end: string;
  place: string;
  cancelled: boolean;
  /** true のとき予定あり。false は空き枠（枠数には含むが実施予定には含めない） */
  booked: boolean;
}

export interface AiProposal {
  primaryAction: string;
  alternativeActions: string[];
  reasons: string[];
  computedAt: string;
  situationSummary: string;
}

export interface ProposalInput {
  userId: string;
  kpis: Kpi[];
  schedules: ScheduleSlot[];
  customers: Customer[];
  hasCancellation: boolean;
}
