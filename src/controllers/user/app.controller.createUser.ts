import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { IUserRepository } from "src/contract/repository/IUserRepository";
import { criptHelper } from "src/helper/criptHelper";

@Controller("user")
export class CreateUserController{
    private bcript:criptHelper = new criptHelper()
    constructor(private repository: IUserRepository){

    }
    @Post()
    async createUser(@Body() body: any, @Res() response: Response){ 
        if(!body.email || !body.password){
            response.status(400).send({"message":"Email/Password need to be informed"})
        }else{
            const responseUser = await this.repository.getByEmail(body.email)
            if(responseUser !== null) {
                //conflict error
                response.status(409)
                response.send({"message":"Ja existe um usuário vinculado a esse endereço de e-mail"})
            } else {
                const data = await this.repository.create({
                            nome: body.nome,
                            email: body.email,
                            password: await this.bcript.getPasswordHash(body.password)
                        })
                delete(data.password)
                response.status(201)
                response.send(data)
            }
        }        
    }
}