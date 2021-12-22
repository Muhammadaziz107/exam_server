const { Router } = require("express");

const router = new Router();

const Users = require("./users/users");
const Admin = require("./admin/admin");
const Orders = require("./orders/orders");
const Clinics = require("./clinic/clinic");

router
  .get("/admin/users", Admin.USERS)
  .post("/newUser", Users.REGISTER_USER)
  .post("/loginUser", Users.LOGIN_USER)
  .post("/loginUser", Users.IS_ADMIN)
  .post("/loginUser", Users.IS_CLIENT)
  .get("/admin/orders", Orders.ORDERS)
  .get("/types", Users.TYPES)
  .get("/admin/users/:userId", Users.GET_ONE_USER)
  .get("/clinic", Clinics.CLINIC)
  .post("/newOrder", Orders.NEW_ORDER);

module.exports = router;
