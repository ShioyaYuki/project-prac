import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1689038574765 implements MigrationInterface {
    name = 'InitialSchema1689038574765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\` CHANGE \`age\` \`age\` int NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\` CHANGE \`age\` \`age\` int(10) NULL DEFAULT 'NULL'
        `);
    }

}
