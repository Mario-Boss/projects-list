"use client";

import { use, createContext } from "react";

const ProjectContext = createContext(null);

export function ProjectProvider({ children, projectPromise }) {
  let initialProject = use(projectPromise);

  return <ProjectContext.Provider value={{ project: initialProject }}>{children}</ProjectContext.Provider>;
}

export function useProject() {
  let context = use(ProjectContext);
  if (context === null) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}
