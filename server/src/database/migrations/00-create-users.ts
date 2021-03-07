import Knex from 'knex';

export async function up(knex: Knex) {
    return await knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('surname').notNullable();
        table.string('avatar');
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('whatsapp');
        table.string('bio');
    });
}

export async function down(knex: Knex) {
    return await knex.schema.dropTable('users');
}