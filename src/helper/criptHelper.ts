import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { hash, compare} from "bcrypt";
import { env } from "process";
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { Readable } from "stream";
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
    async encript(data:any){
        
        const iv = Buffer.alloc(16, 0); 
        const password = env.user_data_key;
        
        // The key length is dependent on the algorithm.
        // In this case for aes256, it is 32 bytes.
        const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
        const cipher = createCipheriv('aes-256-ctr', key, iv);
        
        const encryptedText = cipher.update(data ,'utf8',"base64") +  cipher.final("base64");
        console.log(iv.toString("hex"));
        console.log(encryptedText.toString());
        
        return encryptedText;
    }
    // randomBytes(16);
    async decript(data: any){
        const iv = Buffer.alloc(16, 0); 
        const password = env.user_data_key;
        // data = Buffer.from(data, 'base64');
        
        // The key length is dependent on the algorithm.
        // In this case for aes256, it is 32 bytes.
        const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
        const decipher = createDecipheriv('aes-256-ctr', key, iv);
        
        const decryptedText =   decipher.update(data, 'base64', "utf8") + decipher.final("utf8") 
        return decryptedText.toString();
    }
}

