import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import EditProject from "../app/projects/[projectId]/edit/page";
import { ProjectProvider } from "../providers/project";
import { SnackbarProvider } from "../providers/snackbar";
import { getProjects } from "../data/projects";

const mockUseParams = jest.fn();
const mockUseRouter = jest.fn();

jest.mock("next/navigation", () => ({
  useParams() {
    return mockUseParams();
  },
  useRouter() {
    return mockUseRouter();
  }
}));

describe("Edit Project Page", () => {
  const id = "project_a";
  const config = {
    field: {
      name: "Project ID",
      value: id
    },
    url: `/projects/${id}/edit`,
    updateButton: "update"
  };

  it("Renders the edit project page with the form and project data", async () => {
    // to render the new projects page I need to mock providers used in the app and pass the projects initial data
    jest.mock("../providers/project");
    jest.mock("../providers/snackbar");
    mockUseParams.mockImplementation(() => ({ projectId: config.field.value }));
    mockUseRouter.mockImplementation(() => config.url);
    const projectPromise = getProjects;

    await act(async () => {
      render(
        <SnackbarProvider>
          <ProjectProvider projectPromise={projectPromise}>
            <EditProject />
          </ProjectProvider>
        </SnackbarProvider>
      );
    });

    // I assumed that the edit project page ("/projects/[projectId]/edit") was displayed correctly because there is a form with button called "update"
    const button = screen.getByRole("button", { name: config.updateButton });
    const input = screen.getByRole("textbox", { name: config.field.name });

    expect(button).toBeInTheDocument();
    expect(input.value).toEqual(config.field.value);
  });
});
