const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const ClientSchema = new Schema(
  {
     name: {
       type: String,
       required: [true, 'Please enter username']
     }, 
     email: {
      type: String,
      required: [true, 'Please enter email']
    },
     tag: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);


let ClientModel = mongoose.model('client', ClientSchema)

module.exports = ClientModel;
