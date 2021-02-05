const ERROR_REGISTER_DATA_INVALID = 'data pendaftaran pekerja tidak lengkap';
const ERROR_WORKER_NOT_FOUND = 'pekerja tidak ditemukan';
const { main, updateDB } = require('../lib/database');

async function register(data) {
  if (
    !data.name ||
    !data.address ||
    !data.email ||
    !data.phone ||
    !data.biografi
  ) {
    throw ERROR_REGISTER_DATA_INVALID;
  }

  const worker = {
    name: data.name,
    photo: data.photo,
    address: data.address,
    email: data.email,
    phone: data.phone,
    biografi: data.biografi,
  };

  await main(worker);
  return worker;
}

async function update(data) {
  const worker = {
    id: data.id,
    name: data.name,
    photo: data.photo,
    address: data.address,
    email: data.email,
    phone: data.phone,
    biografi: data.biografi,
  };

  await updateDB(worker);
  return worker;
}

module.exports = {
  ERROR_REGISTER_DATA_INVALID,
  ERROR_WORKER_NOT_FOUND,
  register,
  update,
};
