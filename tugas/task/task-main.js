const ERROR_CREATE_DATA_INVALID = 'data pekerjaan tidak lengkap';
const ERROR_TASK_NOT_FOUND = 'pekerjaan tidak ditemukan';
const { main, updateDB } = require('./orm');

function create(data) {
  if (!data.job) {
    throw ERROR_CREATE_DATA_INVALID;
  }

  const task = {
    job: data.job,
    attachment: data.attachment,
    done: data.done,
    cancel: data.cancel,
  };

  main(task);
  return task;
}

function update(data) {
  const task = {
    id: data.id,
    job: data.job,
    attachment: data.attachment,
    done: data.done,
    cancel: data.cancel,
  };

  console.log(task);
  updateDB(task);
  return task;
}

module.exports = {
  ERROR_CREATE_DATA_INVALID,
  ERROR_TASK_NOT_FOUND,
  create,
  update,
};
