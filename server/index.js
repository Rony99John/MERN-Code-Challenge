const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CategoriesModel = require("./models/Categories");

const cors = require("cors");

mongoose.connect(
  "mongodb+srv://rony:Rony2023@cluster0.sohkdde.mongodb.net/food?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(cors());

app.post("/createCategory", async (req, res) => {
  try {
    const category = {
      name: "Platters",
      items: [
        {
          name: "Chicken Platter",
          description:
            "4 chicken pieces with our special sauce served with bbq dip and wedges",
          price: 160000,
          image: "https://via.placeholder.com/150",
        },
      ],
    };
    const newCategory = new CategoriesModel(category);
    await newCategory.save();

    res.send(category);
  } catch (err) {
    console.log("hello");
    console.log(err);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3001, () => {
  console.log("Server runnning on port 3001");
});
