import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateTaskController } from './controllers/task/app.controller.createTask';
import { GetTaskController } from './controllers/task/app.controller.getTask';
import { CreateUserController } from './controllers/user/app.controller.createUser';
import { GetUserController } from './controllers/user/app.controller.getUsers';
import { DbModule } from './Model/app.db.module';

@Module({
  imports: [DbModule],
  controllers: [AppController, CreateTaskController, GetTaskController, CreateUserController, GetUserController],
  providers: [AppService],
})
export class AppModule {}
