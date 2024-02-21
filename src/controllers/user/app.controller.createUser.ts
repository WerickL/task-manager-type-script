import { Body, Controller, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { IUserRepository } from "src/contract/repository/IUserRepository";
import { criptHelper } from "src/helper/criptHelper";
import { MailService } from "src/services/Mail-service";
import { Utils } from "src/helper/utils";

@Controller("user")
export class CreateUserController{
    private criptHelper:criptHelper = new criptHelper()
    private mailService = null;
    constructor(private repository: IUserRepository, mailService: MailService){
        this.mailService = mailService
    }
    @Post()
    async createUser(@Req() req: Request, @Body() body: UserBody, @Res() response: Response){ 
        
        if(Utils.empty(req.query.q)){
            if(!body.email || !body.password){
                response.status(400).send({"message":"Email/Password need to be informed"})
            }else{
                const responseUser = await this.repository.getByEmail(body.email)
                if(responseUser !== null) {
                    //conflict error
                    response.status(409)
                    response.send({"message":"Ja existe um usuário vinculado a esse endereço de e-mail"})
                } else {
                    //envia e-mail de confirmação de conta
                    try {
                        var token = await this.criptHelper.encript("opa")
                        JSON.stringify({
                            email:body.email,
                            name: body.name,
                            password: this.criptHelper.getPasswordHash(body.password)
                        })
                        await this.mailService.enviarEmail("wericklima2019@gmail.com",token);
                    } catch (error) {
                        response.status(400)
                        response.send(error.message)
                    }
                };
                
                response.status(201)
                response.send("Aguardando confirmação de conta")
            }  
        }else if (req.query.q === "confirm-user" && !Utils.empty(req.query.token)){
            const token = req.query.token
            let dataDecoded = await this.criptHelper.decript(token)
            response.status(201)
            response.send(dataDecoded)
            // const data = await this.repository.create({
            //     name: dataDecoded.name,
            //     email: dataDecoded.email,
            //     password: await this.criptHelper.getPasswordHash(dataDecoded.password)
            // })
            //delete(data.password)
        }else{
            response.status(400)
            response.send("invalid parameter")
        }      
    }
}
export interface UserBody{
    name: string
    email: string
    password: string
}