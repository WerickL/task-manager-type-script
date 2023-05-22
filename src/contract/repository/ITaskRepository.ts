import { Injectable } from "@nestjs/common";
import { TaskData } from "../DTOs/TaskDto";

@Injectable()
export abstract class ITaskRepository{
    abstract create(data: TaskData): Promise <TaskData>
    abstract getAll(): Promise <TaskData[]>
    abstract getBy(data: any): Promise<TaskData | TaskData[]> 
    abstract getByUser(data: any): Promise<TaskData | TaskData[]> 
}