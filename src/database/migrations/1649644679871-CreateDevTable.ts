import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateDevTable1649644679871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'developers',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isUnique: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true,
                    }
                ]
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('developers');
    }


}
