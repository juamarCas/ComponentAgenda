const express = require("express");
const db = require("../database/index");

const router = express.Router();

router.get("/", (req, res) => {
  // main page
});

router.get("/add", (req, res) => {
  //mostrar la página de registro de componentes
});

router.post("/add", (req, res) => {
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
    pinTecknology,
    pdfUrl,
    imgUrl,
    schemaUrl
  } = req.body; 

  const data = {
    boxnumber,
    types,
    val,
    units,
    quantity,
    description,
    reference,
    package,
    pinTecknology,
    pdfUrl,
    imgUrl,
    schemaUrl
  };

  console.log(data); 
});

module.exports = router;
