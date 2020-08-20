CREATE DATABASE agenda;

USE agenda;

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users 
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2; 

CREATE TABLE components(
    id INT(11) NOT NULL, 
    boxnumber INT(11), 
    types VARCHAR(60) NOT NULL,
    val INT(11), 
    units VARCHAR(60),
    quantity INT(11) NOT NULL,
    description VARCHAR(255),
    reference VARCHAR(60),
    package VARCHAR(60),
    pinTecnology VARCHAR(60) NOT NULL,
    imgUrl VARCHAR(255)   
);

ALTER TABLE components 
    ADD PRIMARY KEY (id);

ALTER TABLE components
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2; 

