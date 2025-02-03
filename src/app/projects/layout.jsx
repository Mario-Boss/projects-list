"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import FavoriteProjects from "@/components/favorite/FavoriteProjects";
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
      <div className="lg:pr-8 mr-0 lg:mr-8 mb-8 lg:mb-0 w-full min-[1024px]:w-1/4 lg:border-r-2 border-silver">
        <PageTitle title="Favorite Projects" variant="h2" />
        <FavoriteProjects />
      </div>
      <div className="grow w-full min-[1024px]:w-3/4">
        <PageTitle title={title} variant="h1" />
        {children}
      </div>
    </>
  );
}
