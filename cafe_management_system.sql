use cafe_management_system;

create table user(
	id int not null auto_increment,
    username varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null,
    primary key (id)
);

select * from user;