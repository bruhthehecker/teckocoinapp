import { SortOrder } from "../../util/SortOrder";

export type CoinTransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
