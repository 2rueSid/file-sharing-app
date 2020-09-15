const { knex } = require('../../knexfile');

const setJoinConditions = joins => {
  let result = '';
  joins.forEach(v => {
    result += `${v.joinType} ${v.joinedTable} ${v.alias} ON ${v.mainTableCondition} = ${v.secondTableCondition} `;
  });

  return result;
};

class BaseModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async insertData(data) {
    let resultData = null;
    if (typeof data === 'object') {
      await knex(this.tableName)
        .insert(data)
        .then(result => {
          resultData = result[0];
        })
        .catch(e => {
          console.log(e);
        });
      return resultData;
    }
    return false;
  }

  async selectDataAsRaw(raw) {
    let foundData = null;
    await knex
      .raw(raw)
      .then(rows => {
        foundData = rows[0];
      })
      .catch(e => {
        console.log(e);
      });

    return !foundData.length ? null : foundData;
  }

  async selectData(whereCondition = {}, whatNeedToSelect = ['*']) {
    let foundData = null;

    await knex
      .from(this.tableName)
      .select(whatNeedToSelect)
      .where(whereCondition)
      .then(rows => {
        foundData = rows;
      })
      .catch(e => {
        console.log(e);
      });

    return !foundData.length ? null : foundData;
  }

  async updateData(whereCondition = {}, data) {
    if (typeof data === 'object') {
      await knex(this.tableName)
        .where(whereCondition)
        .update(data)
        .then(() => 'data is updated')
        .catch(e => {
          console.log(e);
        });
      return true;
    }
    return false;
  }

  async deleteData(whereCondition = {}) {
    let resultData = null;
    await knex(this.tableName)
      .where(whereCondition)
      .del()
      .then(result => {
        resultData = result[0];
      })
      .catch(e => {
        console.log(e);
      });
    return resultData;
  }

  async selectDataWithJoin(condition) {
    let foundData = null;

    await knex
      .raw(
        `SELECT ${condition.whatNeedToSelect} from ${this.tableName} as A ${setJoinConditions(
          condition.joins,
        )} where ${condition.whereCondition}`,
      )
      .then(rows => {
        foundData = rows[0];
      })
      .catch(e => {
        console.log(e);
      });

    return !foundData.length ? null : foundData;
  }
}
module.exports = BaseModel;
