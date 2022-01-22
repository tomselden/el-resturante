//------DEPENDENCIES
const express = require("express")
const methodOverride = require('method-override')

const app = express();

//------CONFIG
require('dotenv').config();
const PORT = process.env.PORT;

//------MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//prefix any routes exposed in this controller
app.use("/places", require("./controllers/places_controller"))

//------ROUTES

// / -> sends hello world
app.get("/", (req, res) => {
    res.render("home")
})

//anything not matched will be caught by this route
app.get("*", (req, res) => {
    res.render('home')
})

//------app listens on this port
app.listen(PORT, console.log(`listneing on ${PORT}`))
