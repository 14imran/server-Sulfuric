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

// api/clients/:myId

router.get('/:myId',  (req, res) => {
    ClientModel.findById(req.params.myId)
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
// api/clients/delete/:id

 router.delete('/delete/:id',  (req, res) => {
  ClientModel.findByIdAndDelete(req.params.id)
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
 // api/clients/edit/:id

 router.patch('/edit/:id',  (req, res) => {
     let id = req.params.id
     const {name, email, tag} = req.body;
  ClientModel.findByIdAndUpdate(id, {$set: {name: name, email: email, tag: tag}})
           .then((response) => {
                res.status(200).json(response)
           })
           .catch((err) => {
                console.log(err)
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           }) 
 })


module.exports = router;