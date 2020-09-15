const randomString = require('crypto-random-string');
const BaseModel = require('./baseModel');

const PROFILE_ACTIVATION_LINK = 1;
const RESET_PASSWORD_LINK = 2;
const SHARE_FILE_LINK = 3;

class Links extends BaseModel {
  constructor() {
    super('links');
    this.activationLink = PROFILE_ACTIVATION_LINK;
    this.resetLink = RESET_PASSWORD_LINK;
    this.shareLink = SHARE_FILE_LINK;
  }

  async createLink(data) {
    const insertData = {
      data: data.data,
      lifetime: data.lifetime ? data.lifetime : null,
      link: data.link,
      type: data.type,
    };
    const query = await this.insertData(insertData);
    return query;
  }

  async selectLink(link, whatNeedToSelect = ['*']) {
    const data = await this.selectData({ link }, whatNeedToSelect);
    return data ? data.find(v => v !== undefined) : data;
  }

  async updateLink(link, value) {
    const data = { lifetime: value.lifetime };
    const query = await this.updateData({ link }, data);
    return query;
  }

  async deleteLink(link) {
    const query = await this.deleteData({ link });
    return query;
  }

  async generateToken() {
    const token = await randomString({ length: 10, type: 'url-safe' });
    return token;
  }
}

module.exports = new Links();
