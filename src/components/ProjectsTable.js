"use client";

import { Table, TableContainer } from "@mui/material";
import ProjectsTableHead from "@/components/ProjectsTableHead";
import ProjectsTableBody from "@/components/ProjectsTableBody";
import ProjectButton from "@/components/ProjectButton";

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
