import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { dbuserProviders } from "./dbuser.provider";
import { dbUserService } from "./dbuser.service";
import {  UserResolver } from "./dbuser.resolver";
//Userテーブル用モジュール 
@Module({
    imports: [DatabaseModule],
    providers: [
        ...dbuserProviders,
        dbUserService,
        UserResolver
    ],
    exports: [dbuserModule, dbUserService]
})
export class dbuserModule { }
