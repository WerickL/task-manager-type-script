import { Task } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { ITaskRepository } from "../../../contratos/repository/ITaskRepository";
import { IPrismaConnection } from "src/contratos/dbConnection/IPrismaConnection";
import { TaskData } from "src/contratos/DTOs/TaskDto";


@Injectable()
export class prismaTaskRepository implements ITaskRepository{
  constructor(private prismaService: IPrismaConnection){

  }
    async create(data: TaskData): Promise<TaskData> {
     return await this.prismaService.
      task.create({
        data 
      })
    }
    async getAll(): Promise <TaskData[]>  {
      return await this.prismaService.task.findMany();
    }
    async getBy(data: TaskData): Promise <Task>  {
      return await this.prismaService.task.findFirst({
        where:{
          id:data.id,
        }
      });
    }
}