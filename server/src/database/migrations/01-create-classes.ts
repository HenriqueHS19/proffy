import Knex from 'knex';

export async function up(knex: Knex) {
    return await knex.schema.createTable('classes', function(table) {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        // Foreign key
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
}

export async function down(knex: Knex) {
    return await knex.schema.dropTable('classes');
}