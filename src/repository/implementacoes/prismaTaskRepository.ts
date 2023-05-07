import { Taskrepository, TaskData} from "../TaskRepository";
import { prismaService } from "../../conection/prismaService";
import { Task } from "@prisma/client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class prismaTaskRepository implements Taskrepository{
  constructor(private prismaService: prismaService){

  }
    async create(data: TaskData): Promise<Task> {
     return await this.prismaService.
      task.create({
        data 
      })
    }
    async getAll(): Promise <Task[]>  {
      return await this.prismaService.task.findMany();
    }
}