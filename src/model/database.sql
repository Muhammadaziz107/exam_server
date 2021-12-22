create database clinic;

create table users(
     user_id serial primary key,
     user_name varchar(64) not null,
     user_email varchar(64) not null,
     user_password varchar(64) not null,
     is_admin boolean default false
);

create table types(
     types_id serial primary key,
     types_name varchar(64) not null
);

create table orders(
     order_id serial primary key,
     order_body text not null,
     user_id int references users(user_id),
     user_name varchar(64),
     types_id int references types(types_id),
     user_phone varchar(64),
     sended_time timestamptz default current_timestamp
);


create table clinic(
     clinic_id serial primary key,
     clinic_name varchar(64)
);



create table user_orders(
     user_orders_id serial primary key,
     user_id int references users(user_id),
     order_id int references orders(order_id)
);