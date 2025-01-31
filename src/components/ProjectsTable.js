"use client";

import {Paper, Table, TableContainer} from "@mui/material";
import ProjectsTableHead from "@/components/ProjectsTableHead";
import ProjectsTableBody from "@/components/ProjectsTableBody";

export default function ProjectsTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="All projects">
        <ProjectsTableHead />
        <ProjectsTableBody />
      </Table>
    </TableContainer>
  );
}
