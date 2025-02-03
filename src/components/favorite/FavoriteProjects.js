"use client";

import { useProject } from "@/providers/project";
import { styled } from "@mui/material/styles";
import { List, Typography } from "@mui/material";
import FavoriteProjectItem from "@/components/favorite/FavoriteProjectItem";

const StyledList = styled(List)(() => ({
  marginTop: "20px"
}));

export default function FavoriteProjects() {
  const { state, dispatch } = useProject();
  const favoritedProjects = state.projects.filter(project => project.favorite);

  return (
    <StyledList>
      {favoritedProjects.length === 0 && <Typography>You don't have any favorite projects yet.</Typography>}
      {favoritedProjects.map(project => (
        <FavoriteProjectItem project={project} key={project.id} />
      ))}
    </StyledList>
  );
}
