const uuid = require('uuid');

module.exports = {
    apps : [{
      name        : "node-1",
      script      : "./app.js",
      watch       : true,
      env: {
        "NODE_PORT": 3000,
      }
    },{
        name        : "node-2",
        script      : "./app.js",
        watch       : true,
        env: {
          "NODE_PORT": 3001,
        }
      },
      {
        name        : "node-3",
        script      : "./app.js",
        watch       : true,
        env: {
          "NODE_PORT": 3002,
        }
      },
      {
        name        : "node-4",
        script      : "./app.js",
        watch       : true,
        env: {
          "NODE_PORT": 3003,
        }
      },
      {
        name        : "node-5",
        script      : "./app.js",
        watch       : true,
        env: {
          "NODE_PORT": 3004,
        }
      },]
  }
  