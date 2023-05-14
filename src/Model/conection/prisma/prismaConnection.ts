import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from '@prisma/client'
import { IPrismaConnection } from "src/contratos/dbConnection/IPrismaConnection";

@Injectable()
export class prismaConnection extends PrismaClient implements IPrismaConnection{
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
          await app.close();
        });
      }
}