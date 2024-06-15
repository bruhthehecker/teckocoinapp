import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  accountBalance?: SortOrder;
  balance?: SortOrder;
  chatId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  points?: SortOrder;
  pointsCount?: SortOrder;
  referralCount?: SortOrder;
  referrals?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  userPoints?: SortOrder;
};
