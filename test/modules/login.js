const loginModule = (server, chai, proxyquire, sinon, stubs) => {
  describe('login module', () => {
    const should = chai.should();
    const { expect } = chai;
    let fakeLogin;
    let fakeRequest;
    let fakeResponse;
    before(() => {
      fakeLogin = proxyquire('../../lib/controllers/loginController.js', {
        jsonwebtoken: stubs.jwtStub,
        '../models/userModel': stubs.userStub,
        '../utils/errorHandler': stubs.errorHandlerStub,
      });
      fakeRequest = {
        body: null,
      };
      fakeResponse = {};
    });
    it('should select user from db', done => {
      fakeRequest.body = {
        email: 'mekahff.@gmail.com',
        password: '123123',
      };
      fakeLogin.login(fakeRequest, fakeResponse);
      sinon.assert.calledWith(stubs.userStub.selectUser, fakeRequest.body.email);
      done();
    });
    it('should sign in', done => {
      chai
        .request(server)
        .post('/login')
        .send({
          email: 'mekahff.@gmail.com',
          password: '123123',
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          expect(res.body).have.include.keys('token');
        });
      done();
    });
    it('should not sign in without password', done => {
      chai
        .request(server)
        .post('/login')
        .send({
          email: 'mekas@fds.com',
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(400);
          expect(res.body).have.include.keys('message');
          done();
        });
    });
    it('should not sign in without email', done => {
      chai
        .request(server)
        .post('/login')
        .send({
          password: '234',
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(400);
          expect(res.body).have.include.keys('message');
          done();
        });
    });
    it('should not sign in because bad credentials', done => {
      chai
        .request(server)
        .post('/login')
        .send(stubs.fakeUser)
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(400);
          expect(res.body).have.include.keys('message');
          done();
        });
    });
  });
};

module.exports = loginModule;
