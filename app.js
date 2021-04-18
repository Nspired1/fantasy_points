if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");

const PORT = process.env.PORT || 3002;
const IP = process.env.IP;

//console logger while in dev for descriptive errors
app.use(morgan("dev"));
// designated folder for static assests: images, css, JS scripts, etc
app.use(express.static(path.join(__dirname, "public")));

//=========== ROUTES ===============//
app.get("/", (req, res) => {
  res.send("This is the homepage of fantasy points");
});

//to start app at command prompt type "nodemon app.js" or "node app.js"
app.listen(PORT, () => {
  console.log(
    `App is running and listening intently on PORT: ${PORT} and IP: ${IP}`
  );
});
