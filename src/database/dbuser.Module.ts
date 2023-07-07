import { Module } from "@nestjs/common";
import { DatabaseModule } from "./databaseModule";
import { userProviders } from "./user.provider";
import { dbUserService } from "./dbuser.Service";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...userProviders,
        dbUserService,
    ],
    exports: [dbuserModule,dbUserService]
})
export class dbuserModule{}
