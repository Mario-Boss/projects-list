"use client";

import { createContext, use, useReducer } from "react";
import { projectReducer } from "@/reducers/project";

export const ProjectContext = createContext(null);

export function ProjectProvider({ children, projectPromise }) {
  let initialProject = use(projectPromise);
  const [state, dispatch] = useReducer(projectReducer, { projects: initialProject });

  return <ProjectContext.Provider value={{ state, dispatch }}>{children}</ProjectContext.Provider>;
}

export function useProject() {
  let context = use(ProjectContext);
  if (context === null) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}
