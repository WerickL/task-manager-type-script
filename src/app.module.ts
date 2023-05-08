import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './controllers/app.controller.task';
import { prismaTaskRepository } from './repository/implementacoes/prismaTaskRepository';
import { prismaUserRepository } from './repository/implementacoes/prismaUserRepository';
import { prismaService } from './conection/prismaService';

@Module({
  imports: [],
  controllers: [AppController, TaskController],
  providers: [AppService, prismaTaskRepository, prismaService, prismaUserRepository ],
})
export class AppModule {}
