module.exports = {

  doSomething: {
    accessType: 'EXECUTE',
    description: 'A custom endpoint',
    accepts: [
      {arg: 'id', type: 'string', required: true, http: {source: 'path'}},
      {
        arg: 'data',
        type: 'object',
        required: true,
        http: {source: 'body'},
      },
      {arg: 'options', type: 'object', http: 'optionsFromRequest'},
    ],
    returns: [{arg: 'response', type: 'object', root: true}],
    http: {path: '/:id/doSomething', verb: 'post', status: 200},
  },

};
