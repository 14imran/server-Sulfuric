const { Schema, model } = require('mongoose');

const clientSchema = new Schema(
  {
     username: {
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


//used to ensure that both emain and username are unique 
// Read https://mongoosejs.com/docs/validation.html#the-unique-option-is-not-a-validator
clientSchema.index({ 'email': 1}, {unique: true});
clientSchema.index({ 'username': 1}, {unique: true});
 module.exports = model('Client', clientSchema);