const BaseModel = require('./baseModel');

class Files extends BaseModel {
  constructor() {
    super('files');
  }

  async createFile(data) {
    const insertData = {
      file_name: data.file_name,
      file_extension: data.file_extension,
      user_id: data.user_id,
      memory: data.memory,
    };

    const query = await this.insertData(insertData);
    return query;
  }

  async selectFilesWithShared(userId, directoryId) {
    let whereCondition = null;
    if (directoryId === 'null') {
      whereCondition = `B.user_id = ${userId} and B.directory_id is null`;
    } else {
      whereCondition = `B.user_id = ${userId} and B.directory_id = ${directoryId}`;
    }

    const condition = {
      joins: [
        {
          joinType: 'LEFT JOIN',
          joinedTable: 'shared_files',
          mainTableCondition: 'A.id',
          alias: 'AS B',
          secondTableCondition: 'B.shared_file_id',
        },
      ],
      whatNeedToSelect:
        'A.id, A.file_name, A.file_extension, A.user_id, A.created_at, A.updated_at',
      whereCondition,
    };

    const data = await this.selectDataWithJoin(condition);

    return data;
  }

  async selectFile(whereCondition, whatNeedToSelect = ['*']) {
    const query = await this.selectData(whereCondition, whatNeedToSelect);
    return query;
  }

  async updateFile(fileId, value) {
    const whereCondition = { id: fileId };
    const data = {
      file_name: value.file_name,
      file_extension: value.file_extension,
    };
    const query = await this.updateData(whereCondition, data);
    return query;
  }

  async deleteFile(fileId) {
    const whereCondition = { id: fileId };
    const query = await this.deleteData(whereCondition);
    return query;
  }

  async getUsedMemory(userId) {
    const raw = `select files.memory, sum(files.memory) from files where user_id = ${userId} group by files.memory`;

    const data = await this.selectDataAsRaw(raw);
    return data;
  }

  async searchFiles(userId, fileName) {
    const whereCondition = `B.user_id = ${userId} and A.file_name like ("%${fileName}%")`;
    const condition = {
      joins: [
        {
          joinType: 'LEFT JOIN',
          joinedTable: 'shared_files',
          mainTableCondition: 'A.id',
          alias: 'AS B',
          secondTableCondition: 'B.shared_file_id',
        },
      ],
      whatNeedToSelect:
        'A.id, A.file_name, A.file_extension, A.user_id, A.created_at, A.updated_at',
      whereCondition,
    };

    const data = await this.selectDataWithJoin(condition);

    return data;
  }
}

module.exports = new Files();
