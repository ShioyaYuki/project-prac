import { Injectable, Inject, Body } from "@nestjs/common";
import { Entity, Repository, } from "typeorm";
import { User } from "./user.entity";
import { elementAt } from "rxjs";
import { CreateUserDto } from "src/user/dto/createUser.dto";
import { updateUserDto } from "src/user/dto/updateuser.Dto";

@Injectable()
export class dbUserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

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
    async destory(num: number) {
        this.userRepository.createQueryBuilder('user').delete().where
            ("id= :id", { id: num }).execute();
    }
    async findOne(num: number) {
        return this.userRepository.createQueryBuilder('user').select().
            where("id= :id", { id: num }).execute();
    }
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