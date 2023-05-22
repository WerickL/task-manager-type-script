import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { IUserRepository } from "src/contract/repository/IUserRepository";
import { criptHelper } from "src/helper/criptHelper";
import { userExists } from "src/helper/userHelper";
import { JwtService } from '@nestjs/jwt';


@Controller("oauth2")
export class contollerLogin{
    private bcript = new criptHelper()
    constructor(private repository: IUserRepository, private jwt: JwtService, ){}
    @Post("auth")
    async login(@Body() body: any, @Res() response: Response){
        
        if(!body.email || !body.password){
            response.status(400).send("Email/Password need to be informed")
        }else{
            const email = body.email
            const password = body.password
            const user = await this.repository.getByEmail(email)
            if(!userExists(user)){
                response.status(404).send("User not found")
            }
            
            const check = await this.bcript.checkPassword(password, user.password.trim())
            
            if(check){
                const payload = {
                    username: user.email,
                    userId: user.id
                }
                const acessToken = this.jwt.sign(payload)
                response.status(201)
                response.send({"acess-token":acessToken})
            }else{
                response.status(401)
                response.send({"detail":"incorrect email or password"})
            }
        }
    }
}
