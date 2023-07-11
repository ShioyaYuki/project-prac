import { Module } from '@nestjs/common';
import { databaseProviders } from './databaseProvider';
//データベース用モジュール
@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }