import { JsonValue } from "type-fest";

export type User = {
  accountBalance: number | null;
  balance: number | null;
  chatId: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  points: number | null;
  pointsCount: number | null;
  referralCount: number | null;
  referrals: number | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userPoints: number | null;
};
