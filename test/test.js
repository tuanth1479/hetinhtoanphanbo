var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello world', done);
  });
});

describe('GET /dev', function() {
  it('respond with dev', function(done) {
    request(app).get('/dev').expect('hello dev', done);
  });
});
