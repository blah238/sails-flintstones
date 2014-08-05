module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    pets: {
      collection: 'pet',
      via: 'owners'
    }
  }
};
