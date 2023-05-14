import { Body, Controller, Post, Res } from "@nestjs/common";
import { response, Response } from "express";
import { IUserRepository } from "src/contratos/repository/IUserRepository";


@Controller("user")
export class CreateUserController{
    constructor(private repository: IUserRepository){

    }
    @Post()
    async createUser(@Body() body: any, @Res() response: Response){
        // await this.repository.getBy({
        //     email:body.email,
        //     nome:body.nome,
        //     password: body.password
        // })
        return await this.repository.getBy(body)
        
        // if(responseUser != undefined){
        //     return await this.repository.create({
        //         nome: body.nome,
        //         email: body.email,
        //         password:body.password
        //     })
        // }else{
        //     response.status(409)
        //     response.send({"message":"Ja existe um usuário vinculado a esse endereço de e-mail"})
        // }
        
        //encriptar senha
        
    }
}