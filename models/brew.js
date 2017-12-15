const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const brewSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Brew = mongoose.model("Brew", brewSchema);

module.exports = Brew;