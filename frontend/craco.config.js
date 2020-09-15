const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@hocs': path.resolve(__dirname, 'src/hocs/'),
    },
  },
};
