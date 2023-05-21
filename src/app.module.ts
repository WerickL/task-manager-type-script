import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateTaskController } from './controllers/task/app.controller.createTask';
import { GetTaskController } from './controllers/task/app.controller.getTask';
import { CreateUserController } from './controllers/user/app.controller.createUser';
import { GetUserController } from './controllers/user/app.controller.getUsers';
import { DbModule } from './Model/app.db.module';
import { login } from './controllers/authentication/login';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './controllers/authentication/auth.service';

@Module({
  imports: [DbModule, JwtModule.register({
    global: true,
    secret: process.env.SECRET_KEY,
    signOptions: { expiresIn: '8h' },
  })],
  controllers: [AppController, CreateTaskController, GetTaskController, CreateUserController, GetUserController, login],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
