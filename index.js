const express = require('express');
const router = require('./routes/index');
require("dotenv").config();



const app = express(); 

//routes
app.use('/component', router); 

//
app.use(express.json()); 

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server listening in port ${process.env.PORT}`)
})
