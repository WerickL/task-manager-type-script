import { Module } from '@nestjs/common';
import { IPrismaConnection } from 'src/contract/dbConnection/IPrismaConnection';
import { prismaConnection } from './connection/prisma/prismaConnection';
import { prismaTaskRepository } from './repository/prisma/prismaTaskRepository';
import { prismaUserRepository } from './repository/prisma/prismaUserRepository';
import { ITaskRepository } from 'src/contract/repository/ITaskRepository';
import { IUserRepository } from 'src/contract/repository/IUserRepository';


@Module({
  imports: [],
  controllers: [],
  providers: [ {
    provide: IPrismaConnection,
    useClass: prismaConnection
  },
  {
    provide:ITaskRepository,
    useClass:prismaTaskRepository
  },
  {
    provide:IUserRepository,
    useClass:prismaUserRepository
  }
 ],
  exports: [
    {
      provide:ITaskRepository,
      useClass:prismaTaskRepository
    },
    {
      provide:IUserRepository,
      useClass:prismaUserRepository
    }
  ]
})
export class DbModule {
}
