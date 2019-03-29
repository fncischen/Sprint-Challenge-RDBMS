const router = require("express").Router();
const projects = require("../data/projectDBM.js");

router.get("/", (req,res) => {
    projects.getProjects()
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({errorMessage: "There was an error in retrieving your data"}));
})

router.get("/:id", (req,res) => {
    projects.getProjects(res.params.id)
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({errorMessage: "There was an error in retrieving your data"}));
})

router.post("/", (req,res) => {
    projects.insertProject(req.body)
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({errorMessage: "There was an error in posting your data"}));
})

module.exports = router; 