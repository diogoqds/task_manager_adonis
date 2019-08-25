'use strict'

const User = use('App/Models/User');
const Database = use('Database')

class UserController {

  async store({ request }) {
    const userParams = request.only(['username', 'password', 'email']);
    const addressParams = request.input('addresses')

    const trx = await Database.beginTransaction()

    const user = await User.create(userParams, trx);

    await user.addresses().createMany(addressParams, trx)

    await trx.commit()
    return user;
  }
}

module.exports = UserController
