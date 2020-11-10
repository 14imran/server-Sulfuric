const express = require('express')
const router = express.Router()

let ProjectModel = require('../models/Project.model')
const { isLoggedIn } = require('../helpers/auth-helper');

 // /api/Projects

router.get('/', (req, res) => {
    ProjectModel.find()
       .then((Project) => {
            res.status(200).json(Project)
       })
       .catch((err) => {
            res.status(500).json({
                 error: 'Something went wrong',
                 message: err
            })
  })         
})
 // /api/projects/create
router.post('/create',   (req, res) => {  
  const {projectName, title,startDate,endDate,amount,mark} = req.body;
  console.log("Projectssssssssssss",req.body)
  ProjectModel.create({projectName, title,startDate,endDate,amount,mark})
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

// api/projects/:myId

router.get('/:myId',  (req, res) => {
     ProjectModel.findById(req.params.myId)
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
 // api/projects/delete/:id
 
  router.delete('/delete/:id',  (req, res) => {
   ProjectModel.findByIdAndDelete(req.params.id)
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

  // api/projects/edit/:id
router.patch('/edit/:id',  (req, res) => {
      let id = req.params.id
      const {projectName, title,startDate,endDate,amount,mark} = req.body;
   ProjectModel.findByIdAndUpdate(id, {$set: {projectName: projectName, title: title, startDate: startDate,endDate:endDate,amount:amount,mark:mark}})
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