import { Module } from '@nestjs/common';
import { CreateTaskController } from './controllers/task/app.controller.createTask';
import { GetTaskController } from './controllers/task/app.controller.getTask';
import { CreateUserController } from './controllers/user/app.controller.createUser';
import { GetUserController } from './controllers/user/app.controller.getUsers';
import { JwtModule } from '@nestjs/jwt';
import { authModule } from './Modules/authentication/auth.module';
import { DbModule } from './Modules/Model/model.module';
import { DeleteTaskController } from './controllers/task/app.contoller.deleteTask';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './services/Mail-service';
import { AppService } from './app.service';
import { env } from 'process';

@Module({
  imports: [DbModule, JwtModule.register({
    global: true,
    secret: "10",
    signOptions: { expiresIn: '8h' },
    
  }), authModule, MailerModule.forRoot({
    transport: {
      host: env.mailgun_host, 
      secure: false, 
      port: 587, 
      auth: { 
        user: env.maigun_user,
        pass: env.mailgun_pass,
      },
      ignoreTLS: true,
    },
    defaults: { // configurações que podem ser padrões
      from: '"',
    },
  })],
  controllers: [CreateTaskController, GetTaskController, CreateUserController, GetUserController, DeleteTaskController],
  providers: [MailService],
})
export class AppModule {}
