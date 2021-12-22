const { orders, newOrder } = require("./model");

module.exports = {
  ORDERS: async (req, res) => {
    try {
      const order = await orders();
      res.json(order);
    } catch (e) {
      console.log(e.message);
    }
  },
  NEW_ORDER: async (req, res) => {
    try {
      const { orderBody, userName, userPhone } = req.body;

      const newOrders = await newOrder(orderBody, userName, userPhone);
      res.send("new order created");
    } catch (e) {
      console.log(e.message);
    }
  },
};
