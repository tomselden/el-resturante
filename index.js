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

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tselden:Seldart63@cluster0.yh7vi.mongodb.net/restRantDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

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
