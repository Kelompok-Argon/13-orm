// require('./storage-service/main');
const serverTask = require('./task/server');
const serverWorker = require('./worker/server');

// serverTask.run();
serverWorker.run();
