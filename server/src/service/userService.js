const { Customer } = require('../db/models');

module.exports = class UserService {
  static async createNewUser({ username, email, hashPass }) {
    const candidate = await Customer.create({
      username,
      email,
      password: hashPass,
      roleId: 2,
    });
    return candidate;
  }

  static async authenticate(email) {
    const candidate = await Customer.findOne({
      where: {
        email,
      },
    });
    return candidate;
  }
};
