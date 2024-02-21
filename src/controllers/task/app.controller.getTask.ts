import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { ITaskRepository } from "src/contract/repository/ITaskRepository";
import { AuthGuard } from "../../Modules/authentication/auth.service";


@Controller('task')
export class GetTaskController {
    constructor(private repository: ITaskRepository){
    }
    @UseGuards(AuthGuard)
    @Get("/:id")
    async getTasks(@Request() req: any){
    //    console.log(req);
       const user = req.user
        return await this.repository.getByUser(user.userId);
    }
}