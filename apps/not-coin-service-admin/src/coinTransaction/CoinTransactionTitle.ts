import { CoinTransaction as TCoinTransaction } from "../api/coinTransaction/CoinTransaction";

export const COINTRANSACTION_TITLE_FIELD = "id";

export const CoinTransactionTitle = (record: TCoinTransaction): string => {
  return record.id?.toString() || String(record.id);
};
