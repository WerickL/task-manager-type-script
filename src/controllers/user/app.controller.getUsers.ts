import { Controller, Get, Render, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { AuthGuard } from "src/Modules/authentication/auth.service";
import { IUserRepository } from "src/contract/repository/IUserRepository";


@Controller("user")
export class GetUserController{
    constructor(private repository: IUserRepository){
    }
    @UseGuards(AuthGuard)
    @Get()
    async getAllUsers(){
        return await this.repository.getAll()
    }

    @Get("confirm-registrer")
    @Render('index')
    root(@Res() response: Response) {
        response.setHeader('Access-Control-Allow-Origin', '*');
    }
  
}