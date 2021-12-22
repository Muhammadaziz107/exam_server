const { fetch, fetchAll } = require("../../lib/postgres");

// const ORDERS = `
// SELECT
//      *
// from
//      users u
// inner join
//      user_orders uo
// on
//      u.user_id = uo.user_id
// inner join
//      orders o
// on
//      o.order_id = uo.order_id
// `;

const ORDERS = `select order_body, user_name, user_phone, sended_time from orders`;

const NEW_ORDER = `insert into orders(order_body, user_name, user_phone) values($1, $2, $3) returning *`;
const orders = () => fetchAll(ORDERS);
const newOrder = (orderBody, userName, userPhone) =>
  fetch(NEW_ORDER, orderBody, userName, userPhone);
module.exports = {
  orders,
  newOrder,
};
