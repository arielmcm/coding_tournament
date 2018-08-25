const app = require('../../../server/server');

module.exports = {
  doSomething,
};

async function doSomething (id, data) {
  const Project = app.models.Project;
  const project = await Project.findById(id);
  return {
    project,
    data,
  };
}
