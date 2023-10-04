const mongoose = require("mongoose");

const coffeSchema = mongoose.Schema({
  title: { type: String, required: true },
  coffeType: { type: String, required: true },
  beanType: { type: String, required: true },
  toastingLevel: { type: String, required: true },
  coffeRegion: { type: String, required: true },
  coffeAmount: { type: String, required: true },
  roastingCountry: { type: String, required: true },
  isInStock: { type: Boolean, required: true },
});

module.exports = mongoose.model("coffe", coffeSchema);
