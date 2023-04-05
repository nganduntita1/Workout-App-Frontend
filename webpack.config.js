const path = require("path");

module.exports = {
  // ... other configuration ...
  resolve: {
    fallback: {
      querystring: require.resolve("querystring-es3"),
    },
  },
};
