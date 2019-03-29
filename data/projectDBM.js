const db = require("./dbConfig.js");

module.exports = {
    getProjects,
    getProjectById,
    insertProject
}

function getProjects(){
    return db("projects");
}

function getProjectById(id){
    return db("projects")
    .where({id : id})
    .join("actions", "actions.name", "=", "projects.name");
}

function insertProject(project){
    return db("projects").insert(project);
}