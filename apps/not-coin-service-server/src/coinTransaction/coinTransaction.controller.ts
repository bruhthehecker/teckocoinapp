import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CoinTransactionService } from "./coinTransaction.service";
import { CoinTransactionControllerBase } from "./base/coinTransaction.controller.base";

@swagger.ApiTags("coinTransactions")
@common.Controller("coinTransactions")
export class CoinTransactionController extends CoinTransactionControllerBase {
  constructor(protected readonly service: CoinTransactionService) {
    super(service);
  }
}
