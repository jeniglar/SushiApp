CREATE DATABASE sushi_db;
USE sushi_db;

CREATE TABLE sushi
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(200) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);