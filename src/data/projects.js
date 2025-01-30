const projects = [
  {
    id: "project_a",
    name: "Project A",
    desc: "Project A Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: true
  },
  {
    id: "project_b",
    name: "Project B",
    desc: "Project B Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: true
  },
  {
    id: "project_c",
    name: "Project C",
    desc: "Project C Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: false
  },
  {
    id: "project_e",
    name: "Project E",
    desc: "Project E Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: false
  },
  {
    id: "project_f",
    name: "Project F",
    desc: "Project F Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: false
  },
  {
    id: "project_g",
    name: "Project G",
    desc: "Project G Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "2025-01-01",
    end: "2025-12-31",
    manager: "John Doe",
    favorite: false
  }
];

export const getProjects = new Promise(resolve => {
  resolve(projects);
});
