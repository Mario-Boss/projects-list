"use client";

import { useProject } from "@/providers/project";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";

const StyledList = styled("div")(() => ({
  marginTop: "20px"
}));

const StyledItem = styled(ListItem)(() => ({
  "borderBottom": "1px solid #eee",
  "&:hover": {
    background: "#eee"
  }
}));

export default function FavoriteProjects() {
  const { state, dispatch } = useProject();
  const favoritedProjects = state.projects.filter(project => project.favorite);

  return (
    <StyledList>
      <List>
        {favoritedProjects.map(project => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <StyledItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary={project.name} />
            </StyledItem>
          </Link>
        ))}
      </List>
    </StyledList>
  );
}
