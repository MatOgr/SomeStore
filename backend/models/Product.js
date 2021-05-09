const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    guitar_id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
  },
  { collection: "guitars" }
);

const Product = mongoose.model("product", schema);
module.exports = Product;
