import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async enviarEmail(email: string, mensagem: string) {
    var template = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                          <meta charset="UTF-8">
                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <title>Enviar Solicitação POST</title>
                        </head>
                        <body id="aqui">
                          <p>Clique no link abaixo para enviar uma solicitação POST:</p>
                          <a href="http://localhost:3000/user/confirm-registrer?token=${mensagem}">Confirmar Conta</a>
                        </body>
                        </html>
`
    await this.mailerService.sendMail({
      to: email,
      from: 'noreply.werickdev@gmail.com',
      subject: 'Confirmação de conta',
      html: template,
    }).then(() => {})
    .catch((error) => {
      return error
    });
  }
}