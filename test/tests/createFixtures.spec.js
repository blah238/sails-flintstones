var expect = require('chai').expect;

describe('creating users', function (done) {

  it('should have created Fred', function (done) {
    User.findOneByName('Fred').exec(function (err, user) {
      expect(err).to.not.exist;
      expect(user).to.be.an('object');
      expect(user.name).to.equal('Fred');
      done();
    });
  });

  it('should have created Wilma', function (done) {
    User.findOneByName('Wilma').exec(function (err, user) {
      expect(err).to.not.exist;
      expect(user).to.be.an('object');
      expect(user.name).to.equal('Wilma');
      done();
    });
  });

  it('should have created Dino', function (done) {
    Pet.findOneByName('Dino').exec(function (err, pet) {
      expect(err).to.not.exist;
      expect(pet).to.be.an('object');
      expect(pet.name).to.equal('Dino');
      done();
    });
  });

});
