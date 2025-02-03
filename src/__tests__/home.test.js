import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("Renders a home page with the button 'Projects'", () => {
    render(<Home />);

    // I assumed that the home page ("/") was displayed correctly because there is a button "Projects"
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
