module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    owners: {
      collection: 'user',
      via: 'pets'
    }
  }
};
