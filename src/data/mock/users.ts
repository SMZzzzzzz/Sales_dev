import type { User } from "@/domain/types";

export const mockUsers: User[] = [
  {
    id: "u1",
    name: "山田 太郎",
    teamId: "t-east",
    role: "sales",
    status: "active",
  },
  {
    id: "u2",
    name: "佐藤 花子",
    teamId: "t-east",
    role: "sales",
    status: "at_risk",
  },
  {
    id: "u3",
    name: "鈴木 一郎",
    teamId: "t-west",
    role: "sales",
    status: "active",
  },
  {
    id: "u4",
    name: "高橋 美咲",
    teamId: "t-west",
    role: "sales",
    status: "inactive",
  },
];
