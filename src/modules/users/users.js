const { users, registerUser, loginUser, allTypes, getOneUser } = require("./model");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "salom";

module.exports = {
  GET: async (req, res) => {
    try {
      const allUsers = await users();
      res.json(allUsers);
    } catch (e) {
      console.log(e.message);
    }
  },
  REGISTER_USER: async (req, res) => {
    try {
      const { user_name, user_email, user_password } = req.body;

      const registerUsers = await registerUser(user_name, user_email, user_password);
      res.send("new user created");
    } catch (e) {
      console.log(e.message);
    }
  },
  LOGIN_USER: async (req, res) => {
    try {
      const { user_email, user_password } = req.body;
      const foundUser = await loginUser(user_email, user_password);

      if (foundUser) {
        const token = jwt.sign(foundUser, SECRET_KEY);
        res.send({ ...foundUser, token });
      } else {
        res.status(400).send("you are not logged in");
      }
    } catch (e) {
      console.log(e.message);
    }
  },
  IS_ADMIN: async (req, res, next) => {
    try {
      const isAdmins = jwt.verify(req.headers.token, SECRET_KEY);
      if (isAdmins.is_admin) {
        return next();
      } else {
        res.send("not authorized");
      }
    } catch (e) {
      console.log(e.message);
    }
  },
  IS_CLIENT: async (req, res, next) => {
    try {
      const isClients = jwt.verify(req.headers.token, SECRET_KEY);
      const foundClient = await loginUser(isClients.user_email, isClients.user_password);
      const loginClient = foundUser ? true : false;
      if (loginClient) {
        return next();
      } else {
        res.send("not authorized");
      }
    } catch (e) {
      console.log(e.message);
    }
  },
  TYPES: async (req, res) => {
    try {
      const allType = await allTypes();
      res.json(allType);
    } catch (e) {
      console.log(e.message);
    }
  },
  GET_ONE_USER: async (req, res) => {
    try {
      const { userId } = req.params;

      const getOnce = await getOneUser(userId);
      res.json(getOnce);
    } catch (e) {
      console.log(e.message);
    }
  },
};
