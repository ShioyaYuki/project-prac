import { DataSource } from 'typeorm';
import { AppDataSource } from './dataSource';
//データベース用プロバイダ(必要ないので消したい)
export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            // const dataSource = new DataSource({
            //     type: 'mysql',
            //     host: '127.0.0.1',
            //     port: 3306,
            //     username: 'root',
            //     password: 'pass',
            //     database: 'users',
            //     entities: [
            //         __dirname + '/../**/*.entity{.ts,.js}',
            //     ],
            //     "migrationsTableName": "migrations",
            //     "migrations": [__dirname + '/../**/*.migration{.ts,.js}',
            //     ],
            //     synchronize: true,
            // });

            // return dataSource.initialize();
            // return :AppDataSource.initialize()
            return AppDataSource.initialize();
        },
    }
];