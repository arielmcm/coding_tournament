const app = require('../../../server/server');

module.exports = {
  'before delete': validateDelete,
};

async function validateDelete (context) {
  console.log('before delete');
}
