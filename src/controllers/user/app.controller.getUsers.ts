import { Controller, Get, Request } from "@nestjs/common";
import { Request as expRequest } from "express";
import { IUserRepository } from "src/contract/repository/IUserRepository";


@Controller("user")
export class GetUserController{
    constructor(private repository: IUserRepository){
    }
    @Get(":email")
    async getUser(@Request() req: expRequest){
        console.log(req.params.id);
        
        return await this.repository.getByEmail(req.params.email)
    }
}