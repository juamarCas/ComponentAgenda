const express = require("express");
const pool = require("../database/index");
require('dotenv').config(); 
const router = express.Router();

router.get("/", (req, res) => {
  // main page
  res.send("Hello component"); 
});

router.get("/add", (req, res) => {
  //mostrar la página de registro de componentes
});

router.post("/add", async (req, res) => {
  //agregar el componente a la base de datos
  const {
    boxnumber,
    types,
    val,
    units,
    quantity,
    description,
    reference,
    package,
    pinTecnology,
    imgUrl
  } = req.body; 

  const newComponent = {
    boxnumber,
    types,
    val,
    units,
    quantity,
    description,
    reference,
    package,
    pinTecnology,
    imgUrl
  };
  await pool.query(`INSERT INTO ${process.env.COMPONENT_TABLE} set ?`, [newComponent]); 
  res.send("Component added"); 
});

module.exports = router; 
