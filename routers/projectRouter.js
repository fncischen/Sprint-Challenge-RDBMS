const express = require ("express");
const router = express.Router();
const projects = require("../data/projectDBM.js");

router.get("/", (res,req) => {
    projects.getProjects()
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({errorMessage: "There was an error in retrieving your data"}));
})

router.get("/:id", (res,req) => {
    projects.getProjects(res.params.id)
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({errorMessage: "There was an error in retrieving your data"}));
})

router.post("/", (res,req) => {
    projects.insertProject(req.body)
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({errorMessage: "There was an error in posting your data"}));
})