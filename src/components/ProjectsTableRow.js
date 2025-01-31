"use client";

import { useState } from "react";
import { useProject } from "@/providers/project";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import { BookmarkAdd, BookmarkRemove } from "@mui/icons-material";

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
  justifyContent: "space-evenly"
}));

export default function ProjectsTableRow({ project }) {
  const { state, dispatch } = useProject();
  const [favorite, setFavorite] = useState(project.favorite);

  const onFavoriteHandle = () => {
    setFavorite(prevState => !prevState);
    favorite ? dispatch({ type: "unlike", projectId: project.id }) : dispatch({ type: "like", projectId: project.id });
  };

  return (
    <TableRow>
      <TableCell align="center">
        <StyledLink href={`/projects/${project.id}`}>
          <span>{project.id}</span>
        </StyledLink>
      </TableCell>
      <TableCell align="center" component="th" scope="row">
        {project.name}
      </TableCell>
      <TableCell align="right">{project.start}</TableCell>
      <TableCell align="right">{project.end}</TableCell>
      <TableCell align="center">{project.manager}</TableCell>
      <ActionCell>
        <IconButton size="large" aria-label="favorite" onClick={onFavoriteHandle}>
          {favorite ? <BookmarkRemove fontSize="large" color="secondary" /> : <BookmarkAdd fontSize="large" />}
        </IconButton>
        <StyledButtonLink href={`/projects/${project.id}`} passHref>
          <Button variant="contained" aria-label="edit project">
            Edit
          </Button>
        </StyledButtonLink>
      </ActionCell>
    </TableRow>
  );
}
