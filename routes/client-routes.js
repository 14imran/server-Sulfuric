const express = require('express')
const router = express.Router()

let ClientModel = require('../models/Client.model')
const { isLoggedIn } = require('../helpers/auth-helper');
const { create } = require('../models/Todo.model');

 // /api/clients

router.get('/', (req, res) => {
    ClientModel.find()
       .then((client) => {
            res.status(200).json(client)
       })
       .catch((err) => {
            res.status(500).json({
                 error: 'Something went wrong',
                 message: err
            })
  })         
})
 // /api/clients/create
router.post('/create', isLoggedIn,  (req, res) => {  
  const {name, email, tag} = req.body;
  console.log("clients",req.body)
  ClientModel.create({name, email, tag})
        .then((response) => {
             res.status(200).json(response)
        })
        .catch((err) => {
             res.status(500).json({
                  error: 'Something went wrong',
                  message: err
             })
        })  
})




module.exports = router;