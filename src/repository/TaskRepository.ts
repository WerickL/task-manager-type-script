import { Task } from "@prisma/client"

export interface TaskData{
  descricao: string
  dataDeCadastro:  string
  dataDeInicio: string
  status: number 
  dataPrevista: string
  dataDeConclusao: string
  detalhes: string
} 
export interface Taskrepository{
    create(data: any): Promise <void>
    getAll(): Promise <Task[]>
}