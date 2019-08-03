'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddTokenToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('token')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('token')
    })
  }
}

module.exports = AddTokenToUsersSchema
