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
 // /api/Projects/create
router.post('/create', isLoggedIn,  (req, res) => {  
  const {projectName, title,startDate,endDate,amount,mark} = req.body;
  console.log("Projectssssssssssss",req.session)
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




module.exports = router;