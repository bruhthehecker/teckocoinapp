import { CoinTransactionWhereInput } from "./CoinTransactionWhereInput";
import { CoinTransactionOrderByInput } from "./CoinTransactionOrderByInput";

export type CoinTransactionFindManyArgs = {
  where?: CoinTransactionWhereInput;
  orderBy?: Array<CoinTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
