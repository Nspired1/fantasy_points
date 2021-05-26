if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const ExpressError = require("./ExpressError");
//const session = require("express-session");
//const wrapAsync = require("./wrapAsync");


const PORT = process.env.PORT || 3002;
const IP = process.env.IP;

//console logger while in dev for descriptive errors
app.use(morgan("dev"));
// designated folder for static assests: images, css, JS scripts, etc
app.use(express.static(path.join(__dirname, "public")));

// const sessionOptions = {
//   name: 'session',
//   secret: 'notagoodsecret',
//   resave: 'false',
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//     maxAge: 1000 * 60 * 60 * 24 * 7
//   }
// }

// app.use(
//   session({
//     sessionOptions
//   })
// );



//=========== ROUTES ===============//
app.get("/", (req, res) => {
  res.send("This is the homepage of fantasy points");
});

// fallback route. If none of above routes are met, then handle with 404
app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Founds', 404))
});

// eslint-disable-next-line
app.use((error, req, res, next) => {
  const { statusCode = 500, message = "Sorry, something went wrong"} = error;
  res.status(statusCode).send(message);
  res.send("Oops, something went wrong.");
})

//to start app at command prompt type "nodemon", "nodemon app.js", or "node app.js"
app.listen(PORT, () => {
  console.log(
    `App is running and listening intently on PORT: ${PORT} and IP: ${IP}`
  );
});
