import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import NewProject from "../app/projects/new/page";
import { ProjectProvider } from "../providers/project";
import { SnackbarProvider } from "../providers/snackbar";
import { getProjects } from "../data/projects";

// this page test requires additional mock to handle useRouter hook
jest.mock("next/navigation");

describe("New Project Page", () => {
  const config = {
    button: "create",
    input: "Project ID"
  };

  it("Renders a new project page with the form to add project", async () => {
    // to render the new projects page I need to mock providers used in the app and pass the projects initial data
    jest.mock("../providers/project");
    jest.mock("../providers/snackbar");
    const projectPromise = getProjects;

    await act(async () => {
      render(
        <SnackbarProvider>
          <ProjectProvider projectPromise={projectPromise}>
            <NewProject />
          </ProjectProvider>
        </SnackbarProvider>
      );
    });

    // I assumed that the new project page ("/projects/new") was displayed correctly because there is a form button to create a new project with text "create"
    const button = screen.getByRole("button", { name: new RegExp(`${config.button}`) });
    // to make sure the page is displaying the form the code below will check all inputs on the page and find the input with the text "Project ID"
    const input = screen.getByRole("textbox", { name: new RegExp(`${config.input}`) });

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
