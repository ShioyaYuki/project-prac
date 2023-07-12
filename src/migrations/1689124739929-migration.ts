import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1689124739929 implements MigrationInterface {
    name = 'Migration1689124739929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\` CHANGE \`lastUpdate\` \`updated\` datetime NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\` CHANGE \`updated\` \`lastUpdate\` datetime NOT NULL
        `);
    }

}
