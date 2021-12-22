const { fetch, fetchAll } = require("../../lib/postgres");

const USERS = `select * from users`;
const REGISTER_USER = `
    insert into 
      users(user_name, user_email, user_password) 
    values($1, $2, $3) 
      returning *
`;

const LOGIN_USER = `select * from users where user_email = $1 and user_password = $2`;

const ALL_TYPES = `select * from types`;

const GET_ONE_USER = `select * from users where user_id = $1`;

const users = () => fetchAll(USERS);
const registerUser = (user_name, user_email, user_password) =>
  fetch(REGISTER_USER, user_name, user_email, user_password);

const loginUser = (user_email, user_password) =>
  fetch(LOGIN_USER, user_email, user_password);

const allTypes = () => fetchAll(ALL_TYPES);
const getOneUser = user_id => fetch(GET_ONE_USER, user_id);

module.exports = {
  users,
  registerUser,
  loginUser,
  allTypes,
  getOneUser,
};
