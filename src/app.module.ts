import { Module } from '@nestjs/common';
import { CreateTaskController } from './controllers/task/app.controller.createTask';
import { GetTaskController } from './controllers/task/app.controller.getTask';
import { CreateUserController } from './controllers/user/app.controller.createUser';
import { GetUserController } from './controllers/user/app.controller.getUsers';
import { JwtModule } from '@nestjs/jwt';
import { authModule } from './Modules/authentication/auth.module';
import { DbModule } from './Modules/Model/model.module';
import { DeleteTaskController } from './controllers/task/app.contoller.deleteTask';

@Module({
  imports: [DbModule, JwtModule.register({
    global: true,
    secret: process.env.SECRET_KEY,
    signOptions: { expiresIn: '8h' },
  }), authModule],
  controllers: [CreateTaskController, GetTaskController, CreateUserController, GetUserController, DeleteTaskController],
  providers: [],
})
export class AppModule {}
