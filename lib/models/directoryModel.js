const BaseModel = require('./baseModel');

class Directory extends BaseModel {
  constructor() {
    super('directory');
  }

  async createDirectory(data) {
    const insertData = {
      directory_name: data.directory_name,
      father_directory: data.father_directory ? data.father_directory : null,
      user_id: data.user_id,
    };
    const query = await this.insertData(insertData);
    return query;
  }

  async selectDirectory(whereCondition, whatNeedToSelect = ['*']) {
    const query = await this.selectData(whereCondition, whatNeedToSelect);
    return query;
  }

  async updateDirectory(directoryId, value) {
    const data = {
      directory_name: value.directory_name,
    };
    const whereCondition = {
      id: directoryId,
    };
    const query = await this.updateData(whereCondition, data);
    return query;
  }

  async deleteDirectory(whereCondition) {
    const query = await this.deleteData(whereCondition);
    return query;
  }

  async removeRecursive(userId, directoryId) {
    if (typeof directoryId === 'number') {
      await this.deleteData({ user_id: userId, id: directoryId });
    }
    const directory = await this.selectDirectory({
      user_id: userId,
      father_directory: directoryId,
    });

    if (directory) {
      directory.forEach(async v => {
        await this.deleteData({ id: v.id, user_id: userId });
        return this.removeRecursive(userId, v.id);
      });
    }
    return true;
  }
}

module.exports = new Directory();
