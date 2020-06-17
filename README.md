## Component Agenda
This web app is to save all the components you have, making easier 
the desition of buying or not more componentes

## Configuration

create a .env file like this 
```
PORT = 
DB_PORT = 
DATABASE = 
DATABASE_PW = 
DATABASE_LOCATION = 
DATABASE_USER = 
```
### PORT
Select a port, for default you can use port 3000 so the variable could be like
```
PORT = 3000
```

### DB_PORT
port of the local Database, if you are using MySQL normally is set in port 3306
```
PORT = 3306
```

### DATABASE
the name of the database you have created for the project
```
DATABASE = Your_Database_Name
```
### DATABASE_USER
User you want to use for this database, you can create a user or just set root
```
DATABASE_USER = your_user
```

### DATABASE_PW
Password of the user that is using the database, if you are using the root user use the
password you configured for it
```
DATABASE_PW = your_password
```

### DATABASE_LOCATION
IP or location of your database, in this case is in localhost, is a local database
```
DATABASE_LOCATION = localhost
```