const { fetch, fetchAll } = require("../../lib/postgres");

const USERS = `select * from users`;

const users = () => fetchAll(USERS);

module.exports = {
  users,
};
