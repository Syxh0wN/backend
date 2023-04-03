import { MigrationInterface, QueryRunner } from "typeorm";

export class defalt1680549523118 implements MigrationInterface {
    name = 'defalt1680549523118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "fullName" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "name" TO "fullName"`);
    }

}
