const express = require("express");
const app = express();
const port = 3000;
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
 const mongodburl = process.env.mongodburl||"mongodb://localhost/pickups";

mongoose
  .connect(mongodburl)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(err));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));

app.use("/",require("./routes/pickup"));

app.listen(port,()=>{
	console.log("server started...");
})