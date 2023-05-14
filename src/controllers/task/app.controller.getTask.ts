import { Controller, Get } from "@nestjs/common";
import { ITaskRepository } from "src/contratos/repository/ITaskRepository";


@Controller('task')
export class GetTaskController {
    constructor(private repository: ITaskRepository){
    }
    @Get()
    async getTasks(){
        return await this.repository.getAll();
    }
}