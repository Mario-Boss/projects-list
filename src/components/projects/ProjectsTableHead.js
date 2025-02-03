"use client";

import { styled } from "@mui/material/styles";
import { TableCell, TableHead, TableRow } from "@mui/material";

const StyledTableHead = styled(TableHead)(() => ({
  background: "#eee"
}));

export default function ProjectsTableHead() {
  return (
    <StyledTableHead>
      <TableRow>
        <TableCell align="center">Project ID</TableCell>
        <TableCell align="center">Project Name</TableCell>
        <TableCell align="right">Start Date</TableCell>
        <TableCell align="right">End Date</TableCell>
        <TableCell align="center">Project Manager</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </StyledTableHead>
  );
}
