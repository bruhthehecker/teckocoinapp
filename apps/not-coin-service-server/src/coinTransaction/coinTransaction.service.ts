import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CoinTransactionServiceBase } from "./base/coinTransaction.service.base";

@Injectable()
export class CoinTransactionService extends CoinTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
