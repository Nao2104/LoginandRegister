const mongoose = require("mongoose")

const dbName = "bit-shop"
const uri = `mongodb+srv://naomy:Nao210487@bit-cluster.nxvjcev.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true})
    .then((db) => console.log("Conexion a base de datos exitosa"))
    .catch((err) => console.log(err))

module.exports = mongoose