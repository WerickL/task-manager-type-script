import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateTaskController } from './controllers/task/app.controller.createTask';
import { GetTaskController } from './controllers/task/app.controller.getTask';
import { prismaTaskRepository } from './Model/repository/prisma/prismaTaskRepository';
import { prismaUserRepository } from './Model/repository/prisma/prismaUserRepository';
import { ITaskRepository } from './contratos/repository/ITaskRepository';
import { IUserRepository } from './contratos/repository/IUserRepository';
import { CreateUserController } from './controllers/user/app.controller.createUser';
import { GetUserController } from './controllers/user/app.controller.getUsers';
import { DbModule } from './Model/app.db.module';

@Module({
  imports: [DbModule],
  controllers: [AppController, CreateTaskController, GetTaskController, CreateUserController, GetUserController],
  providers: [AppService, 
 ],
})
export class AppModule {}
