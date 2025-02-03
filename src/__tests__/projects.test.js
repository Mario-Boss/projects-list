import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import Projects from "../app/projects/page";
import { ProjectProvider } from "../providers/project";
import { SnackbarProvider } from "../providers/snackbar";
import { getProjects } from "../data/projects";

describe("Projects Manager Page", () => {
  const config = {
    button: "Create Project",
    cell: "project_a"
  };

  it("Renders a projects page with the table of projects and button to add a new project", async () => {
    // to render the projects page I need to mock providers used in the app and pass the projects initial data
    jest.mock("../providers/project");
    jest.mock("../providers/snackbar");
    const projectPromise = getProjects;

    await act(async () => {
      render(
        <SnackbarProvider>
          <ProjectProvider projectPromise={projectPromise}>
            <Projects />
          </ProjectProvider>
        </SnackbarProvider>
      );
    });

    // I assumed that the projects page ("/projects") was displayed correctly because there is a button to create a new project with text "Create Projects"
    const button = screen.getByText(config.button);
    // to make sure the page generates correct data from the mockup data, the code below will check all the cells in the table and find the cell with the product id "project_a"
    // searching for not editable project ID is the best option in this case study as we cannot edit this value and we do not have option to remove project
    const cell = screen.getByRole("cell", { name: new RegExp(`${config.cell}`) });

    expect(button).toBeInTheDocument();
    expect(cell).toBeInTheDocument();
  });
});
