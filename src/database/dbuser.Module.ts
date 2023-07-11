import { Module } from "@nestjs/common";
import { DatabaseModule } from "./databaseModule";
import { dbuserProviders } from "./dbuser.provider";
import { dbUserService } from "./dbuser.Service";
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
