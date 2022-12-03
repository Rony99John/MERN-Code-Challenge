const mongoose = require("mongoose");

const AutoIncrement = require("mongoose-sequence")(mongoose);

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: false,
      },
    },
  ],
  orderNumber: {
    type: Number,
  },
});

CategorySchema.plugin(AutoIncrement, { inc_field: "orderNumber" });
const CategoriesModel = mongoose.model("categories", CategorySchema);
module.exports = CategoriesModel;
