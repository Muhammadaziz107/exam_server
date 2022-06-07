const PG = {
  connectionString: "postgres://postgres:1111@localhost:5432/clinic",
  connectionElSrting: "",
};

module.exports = {
  PORT: process.env.PORT || 7000,
  PG,
};
