import { Body, Controller, Get, Post } from "@nestjs/common";
import { Repository } from "src/repository/Repository";


@Controller('task')
export class TaskController {
    constructor(private repository: Repository){
    }
    @Post()
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
    @Get()
    async getTasks(){
        return await this.repository.getAll();
    }
}