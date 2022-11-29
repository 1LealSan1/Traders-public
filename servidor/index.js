const express = require("express");
const conectarDB = require("./configDB/DB");
const cors = require('cors');
//creamos el servidor
const app = express();

//asignamos puerto
port=5000;

//permite la conexion de expresss-angular
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

//permitimos el uso de json
app.use(express.json());

//conectar a la bd
conectarDB();

app.use("/Users", require("./controllers/ControllerUserClient"));
app.use("/UsersTraders", require("./controllers/ControllerUserTrader"));

app.listen(port, cors(), () => {
    console.log("el servidor corre en el puerto", port);
})