var expect = require('chai').expect,
  userFixtures = require('../fixtures/users'),
  petFixtures = require('../fixtures/pets');

describe('creating users', function (done) {

  it('should create Fred', function (done) {
    User.create(userFixtures.fred(), function (err, user) {
      expect(err).to.not.exist;
      expect(user).to.be.an('object');
      expect(user.name).to.equal('Fred');
      done();
    });
  });

  it('should create Wilma', function (done) {
    User.create(userFixtures.wilma(), function (err, user) {
      expect(err).to.not.exist;
      expect(user).to.be.an('object');
      expect(user.name).to.equal('Wilma');
      done();
    });
  });

  it('should create Dino', function (done) {
    Pet.create(petFixtures.dino(), function (err, pet) {
      expect(err).to.not.exist;
      expect(pet).to.be.an('object');
      expect(pet.name).to.equal('Dino');
      done();
    });
  });

  it('should have created Dino and made Fred and Wilma its owners', function (done) {
    Pet.findOneByName('Dino').populate('owners').exec(function (err, pet) {
      expect(err).to.not.exist;
      expect(pet).to.be.an('object');
      expect(pet.name).to.equal('Dino');
      expect(pet.owners).to.be.an('array');
      var ownerNames = _.pluck(pet.owners, 'name');
      expect(ownerNames).to.include('Fred');
      expect(ownerNames).to.include('Wilma');
      done();
    });
  });

});
