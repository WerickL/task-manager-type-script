import { Repository} from "../Repository";
import { prismaService } from "../../conection/prismaService";
import { Task } from "@prisma/client";
import { Injectable } from "@nestjs/common";

export interface TaskData{
  descricao: string
  dataDeCadastro:  string
  dataDeInicio: string
  status: number 
  dataPrevista: string
  dataDeConclusao: string
  detalhes: string
  
} 
@Injectable()
export class prismaTaskRepository implements Repository{
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