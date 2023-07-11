import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1689058760946 implements MigrationInterface {
    name = 'Test1689058760946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`test\`
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`test\` int NOT NULL
        `);
    }

}
