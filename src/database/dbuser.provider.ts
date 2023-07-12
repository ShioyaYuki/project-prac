import { DataSource } from 'typeorm';
import { User } from './user.entity';
//userテーブル用プロバイダ　ここで使用するリポジトリを決定？
export const dbuserProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (datasource: DataSource) => datasource.getRepository(User),
        inject: ['DATA_SOURCE'],
    },
];