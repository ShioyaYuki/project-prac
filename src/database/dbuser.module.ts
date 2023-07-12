import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { dbuserProviders } from "./dbuser.provider";
import { dbUserService } from "./dbuser.service";
//Userテーブル用モジュール 
@Module({
    imports: [DatabaseModule],
    providers: [
        ...dbuserProviders,
        dbUserService,
    ],
    exports: [dbuserModule, dbUserService]
})
export class dbuserModule { }
