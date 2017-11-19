const app = require("express")();

// Set up form body parsing
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Set up cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// ----------------------------------------
// Sessions/Cookies
// ----------------------------------------
var cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'session',
  keys: ['asdf1234567890qwer']
}));


var flash = require('express-flash-messages');
app.use(flash());

// Set up handlebars
const exphbs = require("express-handlebars");
const helpers = require('./helpers');
app.engine("handlebars", exphbs({
  defaultLayout: "main",
  helpers: helpers.registered,
  partialsDir: 'views/'
}));
app.set("view engine", "handlebars");
app.listen(4200, () => {
  console.log("Listening!");
});