const { clinics } = require("./model");

module.exports = {
  CLINIC: async (req, res) => {
    try {
      const allClinics = await clinics();
      res.json(allClinics);
    } catch (e) {
      console.log(e.message);
    }
  },
};
