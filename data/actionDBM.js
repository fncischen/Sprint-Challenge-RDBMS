const db = require("./dbConfig.js");

module.exports = {
    getActions,
    getActionId,
    addAction
}

function getActions() {
    return db("actions")
}

function getActionId(id) {
    return db("actions").where({"id": id})
}

function addAction(action) {
    return db("actions").insert(action);
}