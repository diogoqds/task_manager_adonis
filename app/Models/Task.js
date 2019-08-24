'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
  user() {
    this.belongsTo('App/Models/User')
  }

  project() {
    this.belongsTo('App/Models/Project')
  }

  file() {
    this.belongsTo('App/Models/File')
  }
}

module.exports = Task
