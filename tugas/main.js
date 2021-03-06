const server = require('./task/server');

function main(argv) {
  switch (argv[2]) {
    case 'basic':
      require('./storage-service/main');
      break;
    case 'task':
      server.run();
      break;
    default:
      console.log(argv[2]);
      process.stdout.write('available commmand are \n');
      process.stdout.write('- basic\n');
      process.stdout.write('- task\n');
      process.stdout.write(':D\n');
  }
}

main(process.argv);

// const { connect } = require('./lib/orm');
// const { TaskSchema } = require('./tasks/task.model');
// const { WorkerSchema } = require('./worker/worker.model');
// const workerServer = require('./worker/server');

// /**
//  * intiate database and other stroage dependency
//  */
// async function init() {
//   try {
//     console.log('connect to database');
//     await connect([WorkerSchema, TaskSchema], {
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: 'postgres',
//       database: 'sanbercode2',
//     });
//     console.log('database connected');
//   } catch (err) {
//     console.error('database connection failed');
//     return;
//   }
// }

// /**
//  * main routine
//  * @param {string} command launch command
//  * @returns {Promise<void>}
//  */
// async function main(command) {
//   switch (command) {
//     case 'task':
//       // TODO: implement task service
//       break;
//     case 'worker':
//       await init();
//       workerServer.run();
//       break;
//     default:
//       console.log(`${command} tidak dikenali`);
//       console.log('command yang valid: task, worker');
//   }
// }

// main(process.argv[2]);