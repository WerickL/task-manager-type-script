import { Injectable } from "@nestjs/common";
import { TaskData } from "../DTOs/TaskDto";

@Injectable()
export abstract class ITaskRepository{
    abstract create(data: any): Promise <TaskData>
    abstract getAll(): Promise <TaskData[]>
    abstract getBy(data: any): Promise<TaskData | TaskData[]> 
}