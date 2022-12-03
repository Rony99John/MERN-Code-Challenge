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

//add item to category
router.put("/addCategoryItem/:id", async (req, res) => {
  const _id = req.params.id;
  const item = req.body.item;

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
        res.send("Item Added");
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//remove item from category
router.put("/removeCategoryItem/:id", async (req, res) => {
  const itemId = req.params.id;

  CategoriesModel.findOneAndUpdate(
    { "items._id": itemId },
    {
      $pull: { items: { _id: itemId } },
    }
  )
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.send("Item Removed");
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//change category name
router.put("/updateCategoryName/:id", async (req, res) => {
  const _id = req.params.id;
  const newName = req.body.name;

  CategoriesModel.findOneAndUpdate(
    { _id: _id },
    {
      name: newName,
    }
  )
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.send("Name changed");
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//update item in categoory
router.put("/updateCategoryItem/:id", async (req, res) => {
  const itemId = req.params.id;
  const newItem = req.body.item;

  CategoriesModel.findOneAndUpdate(
    { "items._id": itemId },
    {
      $set: {
        "items.$.name": newItem.name,
        "items.$.description": newItem.description,
        "items.$.price": newItem.price,
        "items.$.image": newItem.image,
      },
    }
  )
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.send("Item Updated");
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
