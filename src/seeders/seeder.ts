import { Injectable, Logger } from "@nestjs/common";
import { UsersSeederService } from "./user/user.seeder.service";

//seed.ts実行後に最初に呼び出されるクラス
@Injectable()
export class Seeder {
    constructor(
        private readonly logger:Logger,
        private readonly userSeederService: UsersSeederService,    
    ){}

    //実働関数
    async seed(){
        //ローカル関数users()呼び出し
        await this.users()
        .then((completed)=>{
            this.logger.debug('seeding success');
            Promise.resolve(completed);
        })
        .catch((error)=>{
            this.logger.error('seeding failed');
            Promise.reject(error);
        });
    }

    async users(){
        //seedingService呼び出し
        return await Promise.all(this.userSeederService.create())
        .then((createdTasks) => {
            this.logger.debug(
              '作成されたタスク数: ' +
                createdTasks.filter(
                  (nullValueOrCreatedTask) => nullValueOrCreatedTask,
                ).length,
            );
    
            return Promise.resolve(true);
            })
          .catch((error) => Promise.reject(error));
    }
}
