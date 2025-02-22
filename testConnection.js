const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Abhi3191:Abhi%403191@cluster0.qixd3.mongodb.net/myDatabase?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error("Connection error:", err));
