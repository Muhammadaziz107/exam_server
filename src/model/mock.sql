insert into users(user_name, user_email, user_password, is_admin) values('Ali Aliyev', 'example@gmail.com', 'parol123', true);
insert into users(user_name, user_email, user_password) values('Alisher Sodiqov', 'alisher@gmail.com', '1234');
insert into users(user_name, user_email, user_password) values('Jasur Aliyev', 'Jasur@gmail.com', 'abc');

insert into orders(order_body, user_id, user_name, types_id, user_phone) values('boshim ogriyapti', 2, 'Alisher Sodiqov' , 1, '+998900201088');
insert into orders(order_body, user_id,user_name, types_id, user_phone) values('qolim ogriyapti', 5, 'AA BB', 2, '+998900301088');


insert into user_orders(user_id, order_id) values(2, 1);
insert into user_orders(user_id, order_id) values(5, 2);

insert into clinic(clinic_name) values('Zarafshon');
insert into clinic(clinic_name) values('Oqsoy');
insert into clinic(clinic_name) values('Shifo');