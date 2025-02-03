const projectDescriptionSource = process.env.dataSource === "local" ? "" : "EXPRESS.js - ";
const projects = [
  {
    id: "project_a",
    name: "Project A",
    desc: `Project A Description: ${projectDescriptionSource} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: true
  },
  {
    id: "project_b",
    name: "Project B",
    desc: `Project B Description: ${projectDescriptionSource} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: true
  },
  {
    id: "project_c",
    name: "Project C",
    desc: `Project C Description: ${projectDescriptionSource} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: false
  },
  {
    id: "project_e",
    name: "Project E",
    desc: `Project E Description: ${projectDescriptionSource} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: false
  },
  {
    id: "project_f",
    name: "Project F",
    desc: `Project F Description: ${projectDescriptionSource} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: false
  },
  {
    id: "project_g",
    name: "Project G",
    desc: `Project G Description: ${projectDescriptionSource} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: false
  }
];

const getProjects = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  if(randomNumber === 5) reject({error: "Random API error occured to demonstrate the error handling in the app"});

  switch(process.env.dataSource) {
    case "local":
      resolve(projects);
      break;
    case "express":
      const expressData = fetch(process.env.expressAPIsource + "/projects").then(data => data.json());
      resolve(expressData);
      break;
  }
});

module.exports = {
  getProjects,
  projects
}