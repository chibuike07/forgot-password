const mongoose = require("mongoose");
const { app } = require("./app");

//setting the mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//setting the port to use
const PORT = process.env.PORT || 3000;

//getting the mongodb uri from the env file
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

//connecting to the database
mongoose
  .connect(MONGODB_URI, options)
  .then(() => {
    console.error("connected successfully");
  })
  .catch((err) => {
    throw "error occured : " + err;
  });

//start the server
app.listen(PORT, () => {
  console.log(`server ready on ${PORT}`);
});
