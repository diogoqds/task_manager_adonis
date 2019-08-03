'use strict'

const User = use('App/Models/User');

class UserController {

  async store({ request }) {
    const userParams = request.only(['username', 'password', 'email']);
    const user = await User.create(userParams);

    return user;
  }
}

module.exports = UserController
