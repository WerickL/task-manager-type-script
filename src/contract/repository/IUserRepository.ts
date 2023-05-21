import { Injectable } from "@nestjs/common";
import { UserData } from "../DTOs/UserDto";

@Injectable()
export abstract class IUserRepository{
    abstract create(data: any): Promise <UserData>
    abstract getAll(): Promise <UserData[]>
    abstract getByEmail(data: any): Promise<UserData> 
}