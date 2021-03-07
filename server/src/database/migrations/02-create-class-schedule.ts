import Knex from 'knex';

export async function up(knex: Knex) {
    return await knex.schema.createTable('class_schedule', function (table) {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.string('from').notNullable();
        table.string('to').notNullable();

        // Foreign key
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
}

export async function down(knex: Knex) {
    return await knex.schema.dropTable('class_schedule');
}