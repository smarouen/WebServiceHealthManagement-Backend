const mongoose = require('mongoose');
const MedecinesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  category : {type:String,required:true},
  price: {  type: Number, required: true }
})
const Medecines = mongoose.model('Medecines', MedecinesSchema);
module.exports = Medecines;
