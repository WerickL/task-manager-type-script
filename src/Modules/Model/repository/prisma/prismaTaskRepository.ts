import { Task } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { IPrismaConnection } from "src/contract/dbConnection/IPrismaConnection";
import { TaskData } from "src/contract/DTOs/TaskDto";
import { ITaskRepository } from "src/contract/repository/ITaskRepository";


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
      //where nunca pode ser nulo
      return await this.prismaService.task.findFirst({
        where:{
          id:data.id,
        }
      });
    }
    async getByUser(id: number): Promise <Task[]>  {
      //id nunca pode ser nulo
      return await this.prismaService.task.findMany({
        where:{
          authorId: id
        },
      });
    }
}