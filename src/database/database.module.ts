import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
//データベース用モジュール
@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }