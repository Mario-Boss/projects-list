const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3003;
const { projects } = require("./data/projects");

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.status(200).send("Express.js server is listening on port " + PORT + " - ready to serve projects from http://localhost:3003/api/projects!");
});

server.get("/api/projects", (req, res) => {
  // instead of reading mockup data I would add PRISMA or other ORM implementation here to find all records in the database
  res.status(200).json(projects);
});

server.get("/api/projects/:id", function (req, res) {
  const project = projects.filter(project => project.id === req.params.id); // instead PRISMA or other ORM implementation here to find a single record in the database based on the "req.params.id"

  if (!project.length) {
    res.status(404).json({ message: "no project found" });
  } else {
    res.status(200).json(project);
  }
});

server.post("/api/projects/new", function (req, res) {
  const id = req.body.id;
  const name = req.body.name;
  const desc = req.body.desc || "";
  const start = req.body.start || new Date(Date.now()).toISOString().substring(0, 10);
  const end = req.body.end || "";
  const manager = req.body.manager || "";
  const favorite = req.body.favorite || false;

  // PRISMA or other ORM implementation here to add a new record into the database based on the "req.body" payload

  if (!id || !name) {
    res.status(200).json({ message: "There are no minimum data provided to create a new project - please check project ID and project name" });
  } else {
    // returning payload values only to show that endpoint is fetching data to save in the database
    res.status(200).json({
      id,
      name,
      desc,
      start,
      end,
      manager,
      favorite
    });
  }
});

server.post("/api/projects/:id/edit", function (req, res) {
  const id = req.params.id;
  const name = req.body.name || "";
  const desc = req.body.desc || "";
  const start = req.body.start || new Date(Date.now()).toISOString().substring(0, 10);
  const end = req.body.end || "";
  const manager = req.body.manager || "";
  const favorite = req.body.favorite || false;

  // PRISMA or other ORM implementation here to edit record in the database based on the "req.params.id"

  // returning payload values only to show that endpoint is fetching data to edit from request
  res.status(200).json({
    id,
    name,
    desc,
    start,
    end,
    manager,
    favorite
  });
});

server.listen(3003, (req, res) => {
  console.log("Express.js server is ready and listening on port " + PORT);
});
