const sinon = require('sinon');
const faker = require('faker');

module.exports = {
  fakeUser: {
    name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  fakeLink: {
    data: faker.internet.email,
    link: faker.lorem.slug,
    type: 4,
  },
  userStub: {
    selectUser: sinon.stub().returns(
      Promise.resolve({
        email: 'mekahff.@gmail.com',
        password: '123123',
      })
    ),
    checkUserPassword: sinon.stub().returns(Promise.resolve(true)),
    hashUserPassword: sinon.stub().returns(Promise.resolve(123123)),
    createUser: sinon.stub().returns(Promise.resolve(this.fakeUser)),
  },
  linkStub: {
    createLink: sinon.stub().returns(Promise.resolve(this.fakeLink)),
    USER_AUTH_TOKEN: 4,
  },
  jwtStub: {
    sign: sinon.stub().returns(faker.internet.userAgent()),
  },
  errorHandlerStub: {
    serverError: sinon.stub().returns(),
    invalidCredentials: sinon.stub,
    clientError: sinon.stub(),
    unauthError: sinon.stub(),
  },
  emailStub: {
    sendAccoutnConfirmation: sinon.stub().returns(Promise.resolve(true)),
  },
};
