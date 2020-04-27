const
  { merge } = require('lodash'),
  user = require('./user/user.resolver'),
  scalar = require('./scalars/scalar.resolver');


exports.resolvers = merge(
  {},
  scalar,
  user,
);
