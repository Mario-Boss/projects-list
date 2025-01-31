"use client";

import Link from "next/link";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Link)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "32px"
}));

export default function ProjectsTableHead() {
  return (
    <StyledButton href="/projects/new">
      <Button variant="contained">Create Project</Button>
    </StyledButton>
  );
}
