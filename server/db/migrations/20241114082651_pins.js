/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
    await knex.schema.createTable('pins', (table) => {
        table.increments('id').primary()
        table.float('lat').notNullable()
        table.float('long').notNullable()
        table.string('name')
        table.string('description')
        table.string('user')
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function(knex) {
    await knex.schema.dropTableIfExists('pins')
  }

  