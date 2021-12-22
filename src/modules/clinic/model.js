const { fetch, fetchAll } = require("../../lib/postgres");

const CLINIC = `select * from clinic`;

const clinics = () => fetchAll(CLINIC);

module.exports = {
  clinics,
};
