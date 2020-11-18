import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602614991010 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

        // Cria uma nova tabela
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy:'increment',
            },

            {
                name: 'path',
                type: 'varchar'
            },

            {
                name: 'orphanage_id',
                type: 'integer',
            },
            ],

            // Chaves estrangeiras

            foreignKeys: [
                {
                name: 'ImageOrphanage',
                columnNames: ['orphanage_id'],
                referencedTableName:'orphanages',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE', //Atualiza o Id caso aja mais de 1 imagem
                onDelete: 'CASCADE', //Delete as imagens, caso o orfanato seja deletado
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('imagens');
    }

}
