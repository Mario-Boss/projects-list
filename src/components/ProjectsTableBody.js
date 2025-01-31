"use client";

import { useProject } from "@/providers/project";
import TableBody from "@mui/material/TableBody";
import ProjectsTableRow from "@/components/ProjectsTableRow";

export default function ProjectsTableBody() {
  const { state, dispatch } = useProject();

  return (
    <TableBody>
      {state.projects.map(project => (
        <ProjectsTableRow project={project} key={project.id} />
      ))}
    </TableBody>
  );
}
