import { Module } from "@nestjs/common";
import { CoinTransactionModuleBase } from "./base/coinTransaction.module.base";
import { CoinTransactionService } from "./coinTransaction.service";
import { CoinTransactionController } from "./coinTransaction.controller";
import { CoinTransactionResolver } from "./coinTransaction.resolver";

@Module({
  imports: [CoinTransactionModuleBase],
  controllers: [CoinTransactionController],
  providers: [CoinTransactionService, CoinTransactionResolver],
  exports: [CoinTransactionService],
})
export class CoinTransactionModule {}
