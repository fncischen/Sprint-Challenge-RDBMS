const router = require("express").Router();
const actions = require("../data/actionDBM.js");

router.get("/", (res,req) => {
    actions.getActions()
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({errorMessage: "There was an error in retrieving your data"}));
})

router.get("/:id", (res,req) => {
    actions.getActionId(res.params.id)
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({errorMessage: "There was an error in retrieving your data"}));
})

router.post("/", (res,req) => {
    actions.addAction(req.body)
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({errorMessage: "There was an error in posting your data"}));
})

module.exports = router; 