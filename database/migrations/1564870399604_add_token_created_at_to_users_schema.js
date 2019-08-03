'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddTokenCreatedAtToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.timestamp('token_created_at')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('token_created_at')
    })
  }
}

module.exports = AddTokenCreatedAtToUsersSchema
