import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
    @Field()
    id:number;

    @Field()
    lastname:string;

    @Field()
    firstname:string;

    @Field()
    age:number;

    @Field({nullable: true})
    lastUpdate:Date;
}