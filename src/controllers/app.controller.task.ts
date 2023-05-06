import { Body, Controller, Post } from "@nestjs/common";
import { prismaTaskRepository } from "src/repository/implementacoes/prismaTaskRepository";
import { prismaService } from "../conection/prismaService";


@Controller('api')
export class TaskController {
    constructor(private repository: prismaTaskRepository, private prismaConnection: prismaService){
    }
    @Post("createTask")
    async createTask(@Body() body: any){
        return await this.prismaConnection.task.create({
            data:{
                descricao: body.descricao,
                dataDeCadastro: Date(),
                status: body.status,
                detalhes: body.detalhes,
                dataDeConclusao: null,
                dataDeInicio: null,
                dataPrevista: null
            }
        })
    };
}