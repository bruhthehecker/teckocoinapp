import * as graphql from "@nestjs/graphql";
import { CoinTransactionResolverBase } from "./base/coinTransaction.resolver.base";
import { CoinTransaction } from "./base/CoinTransaction";
import { CoinTransactionService } from "./coinTransaction.service";

@graphql.Resolver(() => CoinTransaction)
export class CoinTransactionResolver extends CoinTransactionResolverBase {
  constructor(protected readonly service: CoinTransactionService) {
    super(service);
  }
}
