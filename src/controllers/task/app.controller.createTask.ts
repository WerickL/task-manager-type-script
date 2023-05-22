import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { ITaskRepository } from "src/contract/repository/ITaskRepository";
import { AuthGuard } from "../../Modules/authentication/auth.service";


@Controller('task')
export class CreateTaskController {
    constructor(private repository: ITaskRepository){
    }
    @UseGuards(AuthGuard)
    @Post()
    async createTask(@Body() body: any, @Request() req: any){
        return await this.repository.create({
            descricao: body.descricao,
            dataDeCadastro: Date(),
            status: body.status,
            detalhes: body.detalhes,
            dataDeConclusao: null,
            dataDeInicio: null,
            dataPrevista: null,
            authorId:req.user.userId
            }
        )
    };
}
