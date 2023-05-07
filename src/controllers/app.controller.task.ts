import { Body, Controller, Get, Post } from "@nestjs/common";
import { prismaTaskRepository } from "src/repository/implementacoes/prismaTaskRepository";


@Controller('api')
export class TaskController {
    constructor(private repository: prismaTaskRepository){
    }
    @Post("createTask")
    async createTask(@Body() body: any){
        return await this.repository.create({
            descricao: body.descricao,
            dataDeCadastro: Date(),
            status: body.status,
            detalhes: body.detalhes,
            dataDeConclusao: null,
            dataDeInicio: null,
            dataPrevista: null
            }
        )
    };
    @Get("get-tasks")
    async getTasks(){
        return await this.repository.getAll();
    }
}