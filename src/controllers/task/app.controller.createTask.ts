import { Body, Controller, Post } from "@nestjs/common";
import { ITaskRepository } from "src/contract/repository/ITaskRepository";


@Controller('task')
export class CreateTaskController {
    constructor(private repository: ITaskRepository){
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
}
