import { Controller, Get } from "@nestjs/common";
import { IUserRepository } from "src/contract/repository/IUserRepository";


@Controller("user")
export class GetUserController{
    constructor(private repository: IUserRepository){
    }
    @Get()
    async getAllUsers(){
        return await this.repository.getAll()
    }
}