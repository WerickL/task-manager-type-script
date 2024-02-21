import { Injectable } from "@nestjs/common";
import { IPrismaConnection } from "src/contract/dbConnection/IPrismaConnection";
import { UserData } from "src/contract/DTOs/UserDto";
import { IUserRepository } from "src/contract/repository/IUserRepository";

@Injectable()
export class prismaUserRepository implements  IUserRepository{
    constructor(private connection: IPrismaConnection){
        
    }
    async create(data: UserData): Promise<UserData> {
        return await this.connection.user.create({
            data
        })
    }
    async getByEmail(email: string): Promise<UserData>{
        let userFind: UserData
        userFind = await this.connection.user.findUnique({
            where:{
                email: email
            }
        })
        return userFind
    }
    async getById(id: number): Promise<UserData>{
        let userFind: UserData
         
        userFind = await this.connection.user.findUnique({
            where:{
                id: Number (id)
            }
        })
        return userFind
    }
    async getAll(): Promise<UserData[]> {
        return await this.connection.user.findMany()
    }
}