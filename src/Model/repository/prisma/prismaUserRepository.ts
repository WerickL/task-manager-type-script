import { User } from "@prisma/client";
import { IUserRepository } from "../../../contratos/repository/IUserRepository";
import { Injectable } from "@nestjs/common";
import { NotFoundError } from "rxjs";
import { IPrismaConnection } from "src/contratos/dbConnection/IPrismaConnection";
export interface createUser{
    nome: string
    email: string
    password: string
}
@Injectable()
export class prismaUserRepository implements  IUserRepository{
    constructor(private connection: IPrismaConnection){
        
    }
    async create(data: createUser): Promise<any> {
        return await this.connection.user.create({
            data
        })
    }
    async getBy(data: createUser): Promise<any>{
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
    async getAll(): Promise<any> {
        return await this.connection.user.findMany()
    }
}