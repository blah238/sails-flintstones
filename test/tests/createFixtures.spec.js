var expect = require('chai').expect;

describe('creating users', function (done) {

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
