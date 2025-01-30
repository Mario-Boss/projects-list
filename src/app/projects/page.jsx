"use client";

import { useProject } from "@/providers/project";

export default function Projects() {
  const { state, dispatch } = useProject();
  const favoritedProjects = state.projects.filter(project => project.favorite);
  console.log("ALL PROJECTS:", state.projects);
  console.log("FAVORITED PROJECTS:", favoritedProjects);

  return (
    <>
      <div>Table of projects</div>
    </>
  );
}
