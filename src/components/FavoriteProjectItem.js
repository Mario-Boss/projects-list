"use client";

import Link from "next/link";
import { styled } from "@mui/material/styles";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { BookmarkAdded } from "@mui/icons-material";

const StyledItem = styled(ListItem)(() => ({
  "borderBottom": "1px solid #eee",
  "&:hover": {
    background: "#eee"
  }
}));

export default function FavoriteProjectItem({ project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <StyledItem>
        <ListItemIcon>
          <BookmarkAdded fontSize="large" color="secondary" />
        </ListItemIcon>
        <ListItemText primary={project.name} />
      </StyledItem>
    </Link>
  );
}
