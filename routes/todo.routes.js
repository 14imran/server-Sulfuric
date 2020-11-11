const express = require('express')
const router = express.Router()

let TodoModel = require('../models/Todo.model')
const { isLoggedIn } = require('../helpers/auth-helper'); // to check if user is loggedIn

//http://localhost:5000/api/todo/todos
router.get('/todos', (req, res) => {
     TodoModel.find()
          .then((todos) => {
               res.status(200).json(todos)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
     })         
})
//http://localhost:5000/api/todo/create`
router.post('/create',   (req, res) => {  
    const {name, description, completed, image} = req.body;
    console.log(req.body)
    TodoModel.create({name, description, completed, image})
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

router.get('/todos/:myId', isLoggedIn, (req, res) => {
    TodoModel.findById(req.params.myId)
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
// /api/todo/todos/:id
// router.delete('/todos/:id', isLoggedIn, (req, res) => {
//     TodoModel.findByIdAndDelete(req.params.id)
//           .then((response) => {
//                res.status(200).json(response)
//           })
//           .catch((err) => {
//                res.status(500).json({
//                     error: 'Something went wrong',
//                     message: err
//                })
//           })  
// })
// /api/todo/edit/:id
router.patch('/edit/:id', isLoggedIn, (req, res) => {
    let id = req.params.id
    const {name, description, completed} = req.body;
    TodoModel.findByIdAndUpdate(id, {$set: {name: name, description: description, completed: completed}})
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
