import { Taskrepository, TaskData} from "../TaskRepository";
import { prismaConnection } from "../../conection/prismaConnection";
import { Task } from "@prisma/client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class prismaTaskRepository implements Taskrepository{
    async create(data: TaskData): Promise<void> {
      await prismaConnection.task.create({
        data 
      })
    }
    async getAll(): Promise <Task[]>  {
      return await prismaConnection.task.findMany();
    }
}