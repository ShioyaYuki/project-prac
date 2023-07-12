import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { dbuserModule } from 'src/database/dbuser.module';
import { dbUserService } from 'src/database/dbuser.service';
import { updateUserDto } from './dto/update.user.dto';

//ユーザーエンドポイント用サービスクラス
//DB接続後はDB用serviceクラスへの中継が役割(消してもいいが使うかも)
@Injectable()
export class UserService {

    constructor(
        private readonly dbuserservice: dbUserService,
    ) { }

    users: CreateUserDto[] = []
    create(user: CreateUserDto) {
        return this.dbuserservice.Create(user);
    }

    async showDB() {
        return this.dbuserservice.findAll();
    }

    async showID() {
        return this.dbuserservice.showID();
    }

    async destory(id: number) {
        return this.dbuserservice.destory(id);
    }

    async findOne(id: number) {
        return this.dbuserservice.findOne(id);
    }

    async updateFromID(update: updateUserDto) {
        return this.dbuserservice.UpdateFromID(update);
    }
}
