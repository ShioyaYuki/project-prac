import { DataSource }from "typeorm"
//dataSourceの設定
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'pass',
    database: 'users',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrationsTableName: "migrations",
    migrations:[ __dirname + '/../**/migration{.ts,.js}',
    ],
    //synchronize: true,
});


