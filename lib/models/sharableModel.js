const BaseModel = require('./baseModel');

class Shared extends BaseModel {
  constructor() {
    super('shared_files');
  }

  async shareFile(data) {
    const insertData = {
      shared_file_id: data.shared_file_id,
      user_id: data.user_id,
      directory_id: data.directory_id ? data.directory_id : null,
    };
    const query = await this.insertData(insertData);
    return query;
  }

  async selectSharedFile(whereCondition, whatNeedToSelect = ['*']) {
    const query = await this.selectData(whereCondition, whatNeedToSelect);
    return query;
  }

  async updateSharedFile(id, value) {
    const data = { shared_file_id: value.sharedFileId };
    const query = await this.updateData({ id }, data);
    return query;
  }

  async deleteSharedFile(whereCondition) {
    const query = await this.deleteData(whereCondition);
    return query;
  }
}

module.exports = new Shared();
