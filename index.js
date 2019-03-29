const express = require ("express");
const server = express();

const projectRouter = require("/routers/projectRouter.js");
const actionRouter = require("/routers/actionRouter.js");

server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

server.listen(5000, () => 
console.log(`\n *** Listening on ${5000} *** \n`));
