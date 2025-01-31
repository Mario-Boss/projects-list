"use client";

import { useProject } from "@/providers/project";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableHead = styled(TableHead)(() => ({
  background: "#eee"
}));

const StyledLink = styled(Link)(() => ({
  "& span:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "5px"
  }
}));

export default function ProjectsTable() {
  const { state, dispatch } = useProject();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="All projects">
        <StyledTableHead>
          <TableRow>
            <TableCell align="center">Project ID</TableCell>
            <TableCell align="center">Project Name</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="center">Project Manager</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {state.projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell align="center"><StyledLink href={`/projects/${project.id}`}><span>{project.id}</span></StyledLink></TableCell>
              <TableCell align="center" component="th" scope="row">
                {project.name}
              </TableCell>
              <TableCell align="right">{project.start}</TableCell>
              <TableCell align="right">{project.end}</TableCell>
              <TableCell align="center">{project.manager}</TableCell>
              <TableCell>favorite</TableCell>
              <TableCell><Button>Edit</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
