import { Task } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { ITaskRepository } from "../../../contratos/repository/ITaskRepository";
import { IPrismaConnection } from "src/contratos/dbConnection/IPrismaConnection";

export interface TaskData{
  id?: number
  descricao: string
  dataDeCadastro:  string
  dataDeInicio: string
  status: number 
  dataPrevista: string
  dataDeConclusao: string
  detalhes: string
  
} 
@Injectable()
export class prismaTaskRepository implements ITaskRepository{
  constructor(private prismaService: IPrismaConnection){

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
    async getBy(data: TaskData): Promise <Task>  {
      return await this.prismaService.task.findFirst({
        where:{
          id:data.id,
        }
      });
    }
}