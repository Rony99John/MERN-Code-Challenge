const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");

mongoose.connect(
  "mongodb+srv://rony:Rony2023@cluster0.sohkdde.mongodb.net/food?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(cors());

const routes = require("./routes/routes");

app.use("/", routes);

app.listen(3001, () => {
  console.log("Server runnning on port 3001");
});
