const router = require("express").Router();

const CategoriesModel = require("../models/Categories");

//create category
router.post("/createCategory", async (req, res) => {
  try {
    const category = req.body.category;
    const newCategory = new CategoriesModel(category);
    await newCategory.save();

    res.send("category added");
  } catch (err) {
    console.log("hello");
    console.log(err);
  }
});

//get categories
router.get("/getCategories", (req, res) => {
  CategoriesModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//add iterm to category
router.put("/addCategoryItem/:id", async (req, res) => {
  const _id = req.params.id;
  const item = req.body.item;
  console.log(item);
  CategoriesModel.findOneAndUpdate(
    { _id: _id },
    {
      $push: { items: item },
    }
  )
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.json({ result: result });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//delete categories
router.delete("/deleteCategory/:id", async (req, res) => {
  const _id = req.params.id;
  CategoriesModel.deleteOne({
    _id: _id,
  })
    .then((result) => {
      res.json("Sucessfully deleted");
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
