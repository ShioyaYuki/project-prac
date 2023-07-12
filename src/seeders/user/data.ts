import { updateUserDto } from "src/user/dto/update.user.dto";
//seeding時にテーブルに挿入される行をまとめて記入するファイル
export const users: updateUserDto[] = [
    {
        id: 777,
        firstname: "しーど",
        lastname: "てすとだよ",
        age: 9,
        updated: new Date(2002.5 - 1, 5, 6, 35, 20, 333)
    }
];