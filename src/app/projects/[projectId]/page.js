"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useProject } from "@/providers/project";
import { Box } from "@mui/material";
import ProjectView from "@/components/project/ProjectView";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function ViewProject() {
  const params = useParams();
  const { state, dispatch } = useProject();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    async function wait() {
      await delay(1000);
      await setProjectData(state.projects.find(project => project.id === params.projectId));
    }
    wait();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, pt: 8 }}>
      <ProjectView projectData={projectData} />
    </Box>
  );
}
