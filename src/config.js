// Generated by CoffeeScript 1.8.0
(function() {
  var config, fs;

  fs = require('fs-extra');

  config = {
    port: 59007,
    rootPath: './.api-vcr.data',
    computeFilePath: function() {
      config.filePath = [config.rootPath, config.api.hostname, config.api.port || 80].join('/');
      console.log("Using file path: `" + config.filePath + "`");
      fs.ensureDirSync(config.filePath);
      return config.filePath;
    }
  };

  module.exports = config;

}).call(this);
