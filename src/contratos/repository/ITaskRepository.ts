import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class ITaskRepository{
    abstract create(data: any): Promise <any>
    abstract getAll(): Promise <any>
    abstract getBy(data: any): Promise<any> 
}