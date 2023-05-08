

export abstract class Repository{
    abstract create(data: any): Promise <any>
    abstract getAll(): Promise <any>
}