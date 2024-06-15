import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  accountBalance?: number | null;
  balance?: number | null;
  chatId?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  points?: number | null;
  pointsCount?: number | null;
  referralCount?: number | null;
  referrals?: number | null;
  roles?: InputJsonValue;
  username?: string;
  userPoints?: number | null;
};
