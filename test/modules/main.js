const proxyquire = require('proxyquire');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const loginModule = require('./login');
const registerModule = require('./register');
const stubs = require('../helpers/stubs');
const server = require('../../main');

chai.use(chaiHttp);
module.exports = {
  loginModule: () => loginModule(server, chai, proxyquire, sinon, stubs),
  registerModule: () => registerModule(server, chai, proxyquire, sinon, stubs),
};
