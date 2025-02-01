"use client";

import { useParams } from "next/navigation";
import { useProject } from "@/providers/project";
import { Box } from "@mui/material";
import ProjectView from "@/components/project/ProjectView";

export default function ViewProject() {
  const params = useParams();
  const { state, dispatch } = useProject();
  const project = state.projects.find(project => project.id === params.projectId);

  return (
    <Box sx={{ flexGrow: 1, pt: 8 }}>
      <ProjectView projectData={project} />
    </Box>
  );
}
