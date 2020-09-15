const sinon = require('sinon');
const faker = require('faker');

module.exports = {
  fakeUser: {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  userStub: {
    selectUser: sinon.stub().returns(
      Promise.resolve({
        email: 'mekahff.@gmail.com',
        password: '123123',
      }),
    ),
    checkUserPassword: sinon.stub().returns(Promise.resolve(true)),
    hashUserPassword: sinon.stub().returns(Promise.resolve(123123)),
    createUser: sinon.stub().returns(Promise.resolve(this.fakeUser)),
  },
  jwtStub: {
    sign: sinon.stub().returns(faker.internet.userAgent()),
  },
  errorHandlerStub: {
    serverError: sinon.stub().returns({ message: 'server error' }),
  },
};
