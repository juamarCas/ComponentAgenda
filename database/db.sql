CREATE DATABASE agenda;

USE agenda;

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
    pdfUrl VARCHAR(255),
    imgUrl VARCHAR(255),
    schemaUrl VARCHAR(255)
    
);

ALTER TABLE components 
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2; 

