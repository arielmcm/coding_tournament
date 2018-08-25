const app = require('../../../server/server');

module.exports = {
  beforeRemote: {
    findById: validateUpdate,
  },
};

async function validateUpdate (context) {
  console.log('before findById');
}
