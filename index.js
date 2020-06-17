const express = require('express');
const exhbs = require("express-handlebars"); 
const router = require('./routes/index');
const authRouter = require('./routes/auth'); 
require("dotenv").config();



const app = express(); 

//routes
app.use('/component', router); 
app.use('/auth', authRouter); 

//middleres
app.use(express.urlencoded({extended: false})); 
app.use(express.json()); 

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server listening in port ${process.env.PORT}`)
})
