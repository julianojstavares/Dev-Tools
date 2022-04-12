import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateToolsTable1649642812964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tools',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isUnique: true,
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'link',
                        type: 'varchar',
                    },
                    {
                        name: 'tags',
                        type: 'varchar',
                    }
                ]
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tools');
    }

}
