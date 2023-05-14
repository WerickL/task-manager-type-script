import { IUserRepository } from "../../../contratos/repository/IUserRepository";
import { Injectable } from "@nestjs/common";
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
    async getBy(data: UserData): Promise<UserData[]>{
        let userFind: UserData[]
        userFind = await this.connection.user.findMany({
            where:{
                email: data.email
            }
        })
        if(userFind.length === 0){
            throw new Error("User Not Found")
        }
        else{
            return userFind
        }
    }
    async getAll(): Promise<UserData[]> {
        return await this.connection.user.findMany()
    }
}