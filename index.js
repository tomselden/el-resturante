//------DEPENDENCIES
const express = require("express")
const app = express();

//------CONFIG
const PORT = 3000

//------MIDDLEWARE

//prefix any routes exposed in this controller
app.use("/places", require("./controllers/places_controller"))

//------ROUTES

// / -> sends hello world
app.get("/", (req, res) => {
    res.send("GET / hello world")
})

//anything not matched will be caught by this route
app.get("*", (req, res) => {
    res.status(404).send("404 Page not found, perhaps you go the route wrong?")
})

//------app listens on this port
app.listen(PORT, console.log(`listneing on ${PORT}`))