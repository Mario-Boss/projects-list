"use client";

import { useProject } from "@/providers/project";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import FavoriteProjectItem from "@/components/FavoriteProjectItem";

const StyledList = styled(List)(() => ({
  marginTop: "20px"
}));

export default function FavoriteProjects() {
  const { state, dispatch } = useProject();
  const favoritedProjects = state.projects.filter(project => project.favorite);

  return (
    <StyledList>
      {favoritedProjects.map(project => (
        <FavoriteProjectItem project={project} />
      ))}
    </StyledList>
  );
}
