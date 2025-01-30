"use client";

import Link from "next/link";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";

const StyledItem = styled(ListItem)(() => ({
  "borderBottom": "1px solid #eee",
  "&:hover": {
    background: "#eee"
  }
}));

export default function FavoriteProjectItem({ project }) {
  return (
    <Link href={`/projects/${project.id}`} key={project.id}>
      <StyledItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={project.name} />
      </StyledItem>
    </Link>
  );
}
