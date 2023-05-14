import { User } from "@prisma/client";
import { IUserRepository } from "../../../contratos/repository/IUserRepository";
import { Injectable } from "@nestjs/common";
import { NotFoundError } from "rxjs";
import { IPrismaConnection } from "src/contratos/dbConnection/IPrismaConnection";
import { UserData } from "src/contratos/DTOs/UserDto";

@Injectable()
export class prismaUserRepository implements  IUserRepository{
    constructor(private connection: IPrismaConnection){
        
    }
    async create(data: UserData): Promise<UserData> {
        return await this.connection.user.create({
            data
        })
    }
    async getBy(data: UserData): Promise<any>{
    //     console.log("Here")
    //    return await this.connection.user.findFirstOrThrow({
    //         where:{
    //             email: data.email
    //         }
    //     })
        let userFind: boolean|User 
        return await this.connection.user.findFirst({
            where:{
                email: data.email
            }
        })
        
    }
    async getAll(): Promise<UserData[]> {
        return await this.connection.user.findMany()
    }
}