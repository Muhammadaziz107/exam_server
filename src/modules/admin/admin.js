const { users } = require("./model");

module.exports = {
  USERS: async (req, res) => {
    try {
      const allUsers = await users();
      res.json(allUsers);
    } catch (e) {
      console.log(e.message);
    }
  },
};
