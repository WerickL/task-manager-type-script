import { Body, Controller, Post } from "@nestjs/common";
import { Repository } from "src/repository/Repository";


@Controller("user")
export class userController{
    constructor(private repository: Repository){

    }
    @Post()
    async createTask(@Body() body: any){
        //implementar validação se o usuário ja existe
        //encriptar senha
        return await this.repository.create({
            nome: body.nome,
            email: body.email,
            password:body.password
        })
    }
}