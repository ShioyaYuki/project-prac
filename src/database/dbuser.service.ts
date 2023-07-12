import { Injectable, Inject, Body } from "@nestjs/common";
import { Entity, Repository, } from "typeorm";
import { User } from "./user.entity";
import { elementAt } from "rxjs";
import { CreateUserDto } from "src/user/dto/create.user.dto";
import { updateUserDto } from "src/user/dto/update.user.dto";
//Userテーブル用サービスクラス Controllerで使用するフィールドやメソッドを書く場所？
@Injectable()
export class dbUserService {

    //コンストラクタでdbを持ってくる
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }



    //このクラスが持つテーブル情報を渡す
    async getRepository() {
        return this.userRepository;
    }




    //ユーザーテーブル内の全ての行を呼び出し
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }



    //ユーザーテーブル内の全ての行からIDのみを呼び出し
    async showID() {
        const user = this.findAll();
        const id = [];
        (await user).forEach(element => {
            id.push(element.id);
        })
        //return id;
        const newUserArray = (await user).map((currentvalue) => {
            return currentvalue.id;
        })
        return newUserArray;
    }



    //CreateUsrDto型を引数に新しいユーザーを作成(IDは自動採番のため非指定)
    async Create(createuserdto: CreateUserDto) {
        const user = new User();
        user.firstname = createuserdto.firstname;
        user.lastname = createuserdto.lastname;
        user.age = createuserdto.age;
        user.updated = createuserdto.updated;

        await this.userRepository.insert(user);

        const repository = await this.findAll();
        (await repository).forEach(element => {
            user.id = element.id;
        })
        return user;
    }



    //IDを引数にユーザーテーブルを参照しテーブル内に一致するIDを持つ行があれば削除
    async destory(num: number) {
        this.userRepository.createQueryBuilder('user').delete().where
            ("id= :id", { id: num }).execute();
    }



    //IDを引数にユーザーテーブルを参照しテーブル内に一致するIDを持つ行があれば呼び出し
    async findOne(num: number) {
        return this.userRepository.createQueryBuilder('user').select().
            where("id= :id", { id: num }).execute();
    }



    //updateUserDto型(ユーザーテーブルが持つカラム全て)を引数とし、IDが一致する行の値に引数を代入
    async UpdateFromID(update: updateUserDto) {
        return this.userRepository.createQueryBuilder('user').update().set(
            {
                id: update.id,
                firstname: update.firstname,
                lastname: update.lastname,
                age: update.age,
                updated: update.updated
            }
        ).where("id= :id", { id: update.id }).execute();
    }
}