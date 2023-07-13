import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { UserModel }from './dbuser.models';
import { dbUserService } from './dbuser.service';
import { User } from './user.entity';
@Resolver()
export class UserResolver {
    constructor(private readonly dbuserservice:dbUserService){}
    
    @Query(()=>[UserModel],{nullable:'items'})
    findAll(){
        return this.dbuserservice.graphFindAll();
    }
    //@Query(()=>[User],{nullable:'items'})
    //find(){
    //    return this.dbuserservice.findAll();
    // }
}