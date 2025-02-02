"use client";

import Link from "next/link";
import { styled } from "@mui/material/styles";
import { Button, TableCell, TableRow } from "@mui/material";
import FavoriteButton from "@/components/FavoriteButton";

const StyledLink = styled(Link)(() => ({
  "& span:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "5px"
  }
}));

const StyledButtonLink = styled(Link)(() => ({
  display: "flex",
  alignItems: "center"
}));

const ActionCell = styled(TableCell)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: 0
}));

export default function ProjectsTableRow({ project }) {
  return (
    <TableRow>
      <TableCell align="center">
        <StyledLink href={`/projects/${project.id}`}>
          <span>{project.id}</span>
        </StyledLink>
      </TableCell>
      <TableCell align="center">{project.name}</TableCell>
      <TableCell align="right">{project.start}</TableCell>
      <TableCell align="right">{project.end}</TableCell>
      <TableCell align="center">{project.manager}</TableCell>
      <ActionCell>
        <FavoriteButton projectId={project.id} />
        <StyledButtonLink href={`/projects/${project.id}/edit`} passHref>
          <Button variant="contained" aria-label="edit project">
            Edit
          </Button>
        </StyledButtonLink>
      </ActionCell>
    </TableRow>
  );
}
