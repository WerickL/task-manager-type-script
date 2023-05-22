import { DynamicModule, Inject, Module } from "@nestjs/common";
import { contollerLogin } from "./auth.contoler.login";
import { DbModule } from "../Model/model.module";
import { AuthGuard } from "./auth.service";

@Module({
    controllers:[contollerLogin],
    imports:[DbModule],
    providers:[AuthGuard],
    exports:[AuthGuard]
})
export class authModule{}
