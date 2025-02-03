"use client";

import { Table, TableContainer } from "@mui/material";
import ProjectsTableHead from "@/components/projects/ProjectsTableHead";
import ProjectsTableBody from "@/components/projects/ProjectsTableBody";
import ProjectButton from "@/components/projects/ProjectButton";

export default function ProjectsTable() {
  return (
    <>
      <ProjectButton />
      <TableContainer sx={{ mb: 8 }}>
        <Table aria-label="All projects">
          <ProjectsTableHead />
          <ProjectsTableBody />
        </Table>
      </TableContainer>
    </>
  );
}
