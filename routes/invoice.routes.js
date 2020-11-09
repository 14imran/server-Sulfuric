const express = require('express')
const router = express.Router()

let InvoiceModel = require('../models/Invoice.model')
const { isLoggedIn } = require('../helpers/auth-helper');


//   /api/invoices/
router.get('/', (req, res) => {
  InvoiceModel.find()
     .then((Invoice) => {
       console.log("reqInvoiceee",req.session)
          res.status(200).json(Invoice)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
})         
})
// /api/invoices/create
router.post('/create', isLoggedIn,  (req, res) => {  
const {name, email, tag} = req.body;
console.log("Invoices",req.body)
InvoiceModel.create({name, email, tag})
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