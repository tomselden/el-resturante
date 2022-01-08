const router = require("express").Router();

// GET /places -> returns data about places
router.get("/", (req, res) => {
    res.send("GET /places")
})

//export the router after registering routes (make sure this is at bottom)
module.exports = router;