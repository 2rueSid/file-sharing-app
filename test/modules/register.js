const registerModule = (server, chai, proxyquire, sinon, stubs) => {
  describe('register module', () => {
    const should = chai.should();
    const { expect } = chai;
    let fakeRegister;
    let fakeRequest;
    let fakeResponse;
    before(() => {
      fakeRegister = proxyquire('../../lib/controllers/registerController.js', {
        '../models/userModel': stubs.userStub,
        '../utils/errorHandler': stubs.errorHandlerStub,
        '../models/linksModel': stubs.linkStub,
        '../email/emailNotification': stubs.emailStub,
      });
      fakeRequest = {
        body: null,
        validateErrors: [],
      };
      fakeResponse = {};
    });

    it('should create new user', (done) => {
      chai
        .request(server)
        .post('/auth/register')
        .send({ user: stubs.fakeUser })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          done();
        });
    });

    it('should not create new user because email allready in use', (done) => {
      chai
        .request(server)
        .post('/auth/register')
        .send({
          user: { email: 'mekahff.@gmail.com' },
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(400);
          expect(res.body).have.include.keys('message');
          done();
        });
    });

    it('should return status 400 because there are no user data', (done) => {
      chai
        .request(server)
        .post('/register')
        .send({ user: {} })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(500);
          done();
        });
    });
  });
};
module.exports = registerModule;
