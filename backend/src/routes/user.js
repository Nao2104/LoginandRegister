const express = require("express")
const { json } = require("stream/consumers")
const router = express.Router()


//importar modelo
const User = require("../models/user.model")

//crear usuario
router.post('/signup', async (req, res) => {
  
    let { email } = req.body
    //let email = req.body.email

    email = email.toLowerCase()
    req.body.email = email
    
    //obtener los usuarios que tienen ese email
    let userExists = await User.find({email: {$eq: email}}) // [], [lhsjdlsahjds, dslkahdsaudsa]
    console.log(userExists)

    //validar si el email existe
    if (userExists.length !== 0) {
        return res.status(400).json({msg: "El usuario ya existe"})
            }
    if (user.password !== password) return res.status(401).send('wrong Password')
    
    const newUser = new User(req.body)
    await newUser.save()

    return res.status(201).json({msg: "Usuario creado correctamente"})

})

module.exports = router