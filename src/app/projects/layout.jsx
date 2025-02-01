"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import FavoriteProjects from "@/components/FavoriteProjects";
import PageTitle from "@/components/PageTitle";

export default function ProjectsLayout({ children }) {
  const urlSegments = useSelectedLayoutSegments();
  let title = "Projects Manager";
  if (urlSegments[0] === "new") {
    title = "Adding a New Project";
  } else if (urlSegments.length === 1) {
    title = "Viewing Project Details";
  } else if (urlSegments[1] === "edit") {
    title = "Editing Project Data";
  }

  return (
    <>
      <div className="flex-none pr-8 w-auto border-r-2 border-silver">
        <PageTitle title="Favorite Projects" variant="h2" />
        <FavoriteProjects />
      </div>
      <div className="grow pl-8">
        <PageTitle title={title} variant="h1" />
        {children}
      </div>
    </>
  );
}
