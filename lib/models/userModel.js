const bcrypt = require('bcrypt');
const BaseModel = require('./baseModel');

class User extends BaseModel {
  constructor() {
    super('users');
  }

  async createUser(userData) {
    const query = await this.insertData(userData);
    return query;
  }

  async selectUser(email, whatNeedToSelect = ['*']) {
    const query = await this.selectData({ email }, whatNeedToSelect);

    return query ? query.find((v) => v !== undefined) : query;
  }

  async updateUser(email, whatNeedToUpdate) {
    const query = await this.updateData({ email }, whatNeedToUpdate);
    return query;
  }

  async deleteUser(userId) {
    const whereCondition = { user_id: userId };

    const query = await this.deleteData(whereCondition);
    return query;
  }

  async checkUserPassword(passwordFromDb, userPassword) {
    let valid = false;
    await bcrypt
      .compare(userPassword, passwordFromDb)
      .then((isValid) => {
        valid = isValid;
      })
      .catch((e) => {
        console.log(e);
      });
    return valid;
  }

  async hashUserPassword(password, salt = 10) {
    let hashedPassword = null;
    await bcrypt
      .hash(password, salt)
      .then((newPassword) => {
        hashedPassword = newPassword;
      })
      .catch((e) => console.log(e));
    return hashedPassword;
  }
}

module.exports = new User();
