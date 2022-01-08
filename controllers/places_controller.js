const router = require("express").Router();
const places = require("../models/places_model")
// GET /places -> returns data about places
router.get("/", (req, res) => {
    res.render("places/index", {places})
})

// POST /places -> adds place to list
router.post("/", (req, res) => {
    if(req.body){
        //for now rely on clients to validate data
        places.push(req.body)
        res.redirect("/places")
    }
    else {
        res.render("error404")
    }
})

// Get /places/new -> renders new place form
router.get("/new", (req, res) => {
    res.render("places/new")
})

// GET /places/:index -> show place details
router.get("/:index", (req, res) => {
    let index = req.params.index
    if(places[index]){
        res.render("places/show", {place: places[index], index: index})
    }
    else {
        res.render("error404")
    }
})

// GET /places/:index/edit -> show place edit form
router.get("/:index/edit", (req, res) => {
    let index = req.params.index
    if(places[index] ){
        res.render("places/edit", {place: places[index], index: index})
    }
    else {
        res.render("error404")
    }
})

// PUT /places/:index -> update place details
router.put("/:index", (req, res) => {
    let index = req.params.index

    if(places[index] && req.body){
        places[index] = req.body
        res.redirect(`/places/${index}`)
    }
    else {
        res.render("error404")
    }
})

// DELETE /places/:index -> delete place details
router.delete("/:index", (req, res) => {
    let index = req.params.index

    if(places[index] && req.body){
        //remove one element starting at the index
        places.splice(index,1)
        res.redirect(`/places`)
    }
    else {
        res.render("error404")
    }
})
//export the router after registering routes (make sure this is at bottom)
module.exports = router;