import { Controller, Delete, Param, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/Modules/authentication/auth.service";
import { ITaskRepository } from "src/contract/repository/ITaskRepository";

@Controller("task")
export class DeleteTaskController{
    constructor(private repository: ITaskRepository){
    }

    @UseGuards(AuthGuard)
    @Delete("/:id")
    async deleteTask(@Request() req: any, @Param("id") id:number){
        const taskId = Number (id)
        return await this.repository.deleteById(taskId)
    }
}
