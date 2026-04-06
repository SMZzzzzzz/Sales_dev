import { create } from "zustand";
import { mockCustomers, mockKpis, mockSchedules } from "@/data/mock";
import { suggestNextActions } from "@/domain/ai/suggestNextActions";
import type { AiProposal, ScheduleSlot } from "@/domain/types";

export const SALES_USER_ID = "u1";

function cloneSchedules(): ScheduleSlot[] {
  return mockSchedules.map((s) => ({ ...s }));
}

interface DemoState {
  schedules: ScheduleSlot[];
  lastProposal: AiProposal | null;
  toggleSlotCancel: (slotId: string) => void;
  recomputeProposal: () => void;
}

export const useDemoStore = create<DemoState>((set, get) => ({
  schedules: cloneSchedules(),
  lastProposal: null,
  toggleSlotCancel: (slotId) => {
    set((state) => ({
      schedules: state.schedules.map((s) =>
        s.id === slotId ? { ...s, cancelled: !s.cancelled } : s
      ),
    }));
    get().recomputeProposal();
  },
  recomputeProposal: () => {
    const { schedules } = get();
    const kpis = mockKpis.filter((k) => k.userId === SALES_USER_ID);
    const proposal = suggestNextActions({
      userId: SALES_USER_ID,
      kpis,
      schedules,
      customers: mockCustomers,
      hasCancellation: schedules.some((s) => s.cancelled),
    });
    set({ lastProposal: proposal });
  },
}));
