import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import ViewProject from "../app/projects/[projectId]/page";
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

describe("View Project Page", () => {
  const id = "project_b";
  const config = {
    project: {
      value: id
    },
    url: `/projects/${id}`,
    editButton: "Edit",
    backButton: "Back"
  };

  it("Renders the edit project page with the form and project data", async () => {
    // to render the view projects page I need to mock providers used in the app and pass the projects initial data
    jest.mock("../providers/project");
    jest.mock("../providers/snackbar");
    mockUseParams.mockImplementation(() => ({ projectId: config.project.value }));
    mockUseRouter.mockImplementation(() => config.url);
    const projectPromise = getProjects;

    await act(async () => {
      render(
        <SnackbarProvider>
          <ProjectProvider projectPromise={projectPromise}>
            <ViewProject />
          </ProjectProvider>
        </SnackbarProvider>
      );
    });

    // I assumed that the view project page ("/projects/[projectId]") was displayed correctly because there is are two buttons: "Back" and "Edit"
    const editButton = screen.getByRole("button", { name: config.editButton });
    const backButton = screen.getByRole("button", { name: config.backButton });

    expect(editButton).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });
});
