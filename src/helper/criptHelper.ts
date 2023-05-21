import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { hash, compare} from "bcrypt";
import { env } from "process";
export class criptHelper {
    async getPasswordHash(password: string){

        try {
            return await hash(password, parseInt(env.KEY))
            
            

        } catch (error) {
            console.log(error);
            
            throw new ExceptionsHandler(error.getMessage)
        }
    }
    async checkPassword(passwordToCheck:any, rightPassword:any) {
        try {
            return await compare(passwordToCheck, rightPassword)

        } catch (error) {
            throw new ExceptionsHandler(error.message)
        }
    }
}

