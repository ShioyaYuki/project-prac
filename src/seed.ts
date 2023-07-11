import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Seeder } from './seeders/seeder';
import { SeederModule } from './seeders/seeder.module';

async function bootstrap() {
    //?????????
    NestFactory.createApplicationContext(SeederModule)
    .then((appContext)=>{
        const logger = appContext.get(Logger);
        const seeder = appContext.get(Seeder);

        //seeder呼び出し
        seeder
        .seed()
        .then(()=>{
            logger.debug('Seeding complete');
        })
        .catch((error)=>{
            logger.error('Seedin failed');
            throw error;
        })
        .finally(()=>appContext.close());
    })
    .catch((error)=>{
        throw error;
    });
}

bootstrap();