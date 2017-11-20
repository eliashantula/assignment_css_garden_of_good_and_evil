const express = require('express')
const cookieParser = require("cookie-parser");
const exphbs = require("express-handlebars");
const fs = require('fs');

const app = express()
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.use(cookieParser());

