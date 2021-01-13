// require packages and files
const express = require('express');
const path = require('path')
const routes = require('./controllers/burgers_controller.js')
var exphbs = require("express-handlebars");

// create port 
const PORT = process.env.PORT || 3000;
// call express
app = express();
// create access to public folder for browser use
app.use(express.static(path.join(__dirname, 'public')));
// decrypt and handle json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set default layout to main.handlebars and set view engine to handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// use routs from controllers
app.use(routes);

// open server port
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})