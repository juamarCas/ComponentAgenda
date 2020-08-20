const express = require('express');
const morgan = require('morgan'); 
const component = require('./routes/component');
const authRouter = require('./routes/auth'); 
const mainPage = require('./routes/index'); 
require("dotenv").config();

const app = express(); 
//middleres
app.use(express.urlencoded({extended: false})); 
app.use(express.json());
app.use(morgan('dev')); 

//routes
app.use('/', mainPage); 
app.use('/component', component); 
app.use('/auth', authRouter); 

 

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server listening in port ${process.env.PORT}`)
})
