import { Body, Controller, Post, Res } from "@nestjs/common";
import { response, Response } from "express";
import { IUserRepository } from "src/contratos/repository/IUserRepository";


@Controller("user")
export class CreateUserController{
    constructor(private repository: IUserRepository){

    }
    @Post()
    async createUser(@Body() body: any, @Res() response: Response){ 
        //inserir validação de campos
        //encriptar a senha antes 
        try {
            const responseUser = await this.repository.getBy(body)
        } catch (error) {
            console.log(error);
            const data = await this.repository.create({
                        nome: body.nome,
                        email: body.email,
                        password:body.password
                    })
            response.status(201).send(data)
        }
        response.status(409)
        response.send({"message":"Ja existe um usuário vinculado a esse endereço de e-mail"})
               
    }
}