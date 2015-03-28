// Generated by CoffeeScript 1.8.0
(function() {
  var apiRecorder, app, config, dataStore, express, fileScanner, http, onError, onListening, record, server, start;

  express = require('express');

  http = require('http');

  config = require('./config');

  dataStore = require('./dataStore');

  apiRecorder = require('./apiRecorder');

  fileScanner = require('./fileScanner');

  app = express();

  server = void 0;

  onError = function(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  };

  onListening = function() {
    var addr, bind;
    addr = server.address();
    bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    return console.log('Express server listening on ' + bind);
  };

  record = function(api) {
    app.use(apiRecorder.createWatcher(api));
    return start();
  };

  start = function(port) {
    app.use(dataStore.fetchDataForRequest);
    server = http.createServer(app);
    server.listen(port || config.defaultPort);
    server.on('error', onError);
    return server.on('listening', onListening);
  };

  module.exports = {
    record: record,
    start: start
  };

}).call(this);
