import {  prismaService } from "src/conection/prismaService";
import { User } from "@prisma/client";
import { Repository } from "../Repository";
import { Injectable } from "@nestjs/common";
export interface createUser{
    nome: string
    email: string
    password: string
}
@Injectable()
export class prismaUserRepository implements  Repository{
    constructor(private connection: prismaService){
        
    }
    async create(data: createUser): Promise<any> {
        return await this.connection.user.create({
            data
        })
    }

    async getAll(): Promise<any> {
        return await this.connection.user.findMany()
    }
}