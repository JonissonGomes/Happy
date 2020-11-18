import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602609055999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            // Tabela do Banco de dados
            // Nome da tabela e em seguida as colunas de cada um em formato de array em JSON
            name: 'orphanages',
            columns: [{
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy:'increment',
            },
            {
                name: 'name',
                type: 'varchar',
            },
            {
                name: 'latitude',
                type: 'decimal',
                scale: 10,
                precision: 2,
            },
            {
                name: 'longitude',
                type: 'decimal',
                scale: 10,
                precision: 2,
            },
            {
                name: 'about',
                type: 'text',
            },
            {
                name: 'instructions',
                type: 'text',
            },
            {
                name: 'opening_hours',
                type: 'varchar',
            },
            {
                name: 'open_on_weekend',
                type: 'boolean',
            },
        ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
    }

}
