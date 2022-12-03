const router = require("express").Router();

const CategoriesModel = require("../models/Categories");

router.post("/createCategory", async (req, res) => {
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

    res.send("category added");
  } catch (err) {
    console.log("hello");
    console.log(err);
  }
});

router.get("/getCategories", (req, res) => {
  CategoriesModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
