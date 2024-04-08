const request = require('supertest');
const app = require('../index'); // Adjust the path to where your Express app is exported
const expect = require('chai').expect;

describe('GET /ping', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/ping')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.have.property('message', 'pong');
        done();
      });
  });
});