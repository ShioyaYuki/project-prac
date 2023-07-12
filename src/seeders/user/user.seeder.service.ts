import { Injectable } from "@nestjs/common";
import { dbUserService } from "src/database/dbuser.service";
import { User } from "src/database/user.entity";
import { users } from "./data";

@Injectable()
//実際にseedingを行うクラス
export class UsersSeederService {
    constructor(private readonly dbuserService: dbUserService) { }

    //行を生成
    create(): Array<Promise<User>> {
        
        return users.map(async (user) => {
            console.log(user);

            //idで検索し一致する値がなければresult=null
            const result = await(await this.dbuserService.getRepository()).findOneBy({ id: user.id });
            console.log(result);


            if (!result) {
                return Promise.resolve(
                    //テーブルにdata.tsの内容を挿入
                    (await this.dbuserService.getRepository()).save(user).catch((error) => Promise.reject(error)),
                );
            } else {
                return Promise.resolve(null);
            }
        }
        )
    };
}