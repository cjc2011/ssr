const ip = require('ip');

module.exports = {
  server: {
    port: 3001,
    host: ip.address(),
  },
  env: {
    baseUrl: `${ip.address()}:3001`
  }
}
