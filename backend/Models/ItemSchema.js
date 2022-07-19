const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  freq: {
    type: Number,
  },
});
module.exports = mongoose.model("item", itemSchema);
