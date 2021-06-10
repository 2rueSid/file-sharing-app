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
        '../models/linksModel': stubs.linkStub,
      });
      fakeRequest = {
        body: null,
        validateErrors: null,
      };
      fakeResponse = {};
    });

    it('should select user from db', (done) => {
      fakeRequest.body = {
        email: 'mekahff.@gmail.com',
        password: '123123',
      };

      fakeLogin.login(fakeRequest, fakeResponse);

      done();
    });

    it('should sign in', (done) => {
      chai
        .request(server)
        .post('/auth/login')
        .send({
          email: 'mekahff.@gmail.com',
          password: '123123',
        })
        .end((err, res) => {
          should.not.exist(err);
          res.type.should.equal('application/json');
        });

      done();
    });

    it('should not sign in without password', (done) => {
      chai
        .request(server)
        .post('/auth/login')
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

    it('should not sign in without email', (done) => {
      chai
        .request(server)
        .post('/auth/login')
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

    it('should not sign in because bad credentials', (done) => {
      chai
        .request(server)
        .post('/auth/login')
        .send(stubs.fakeUser)
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(403);
          expect(res.body).have.include.keys('message');
          done();
        });
    });
  });
};

module.exports = loginModule;
