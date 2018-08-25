const Resource = require('../Resource');
const operationHooks = require('./operation-hooks');
const remoteHooks = require('./remote-hooks');
const remoteDefinitions = require('./remote-definitions');
const remoteMethods = require('./remote-methods');

module.exports = Project => {
  const projectResource = new Resource(Project);

  projectResource
    .extend(remoteMethods)
    .addOperationHooks(operationHooks)
    .addRemoteHooks(remoteHooks)
    .addRemoteMethods(remoteDefinitions);
};
