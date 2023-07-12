import { dbuserModule } from "src/database/dbuser.module";
import { Logger, Module } from '@nestjs/common';
import { DatabaseModule } from "src/database/database.module";
import { Seeder } from "./seeder";
import { UsersSeederService } from "./user/user.seeder.service";
//seeding用モジュール
@Module({
    imports: [dbuserModule, DatabaseModule],
    providers: [Logger, Seeder, UsersSeederService],
})
export class SeederModule { }