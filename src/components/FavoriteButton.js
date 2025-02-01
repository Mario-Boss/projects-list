"use client";

import { useProject } from "@/providers/project";
import { IconButton, Tooltip } from "@mui/material";
import { BookmarkAdd, BookmarkRemove } from "@mui/icons-material";

export default function FavoriteButton({ favoriteStatus, projectId }) {
  const { state, dispatch } = useProject();

  const onFavoriteHandle = () => {
    favoriteStatus ? dispatch({ type: "unlike", projectId }) : dispatch({ type: "like", projectId });
  };

  return (
    <IconButton size="large" aria-label="favorite" sx={{ mr: 4 }} onClick={onFavoriteHandle}>
      {favoriteStatus ? (
        <Tooltip title="Remove from favorites">
          <BookmarkRemove fontSize="large" />
        </Tooltip>
      ) : (
        <Tooltip title="Add to favorites">
          <BookmarkAdd fontSize="large" color="secondary" />
        </Tooltip>
      )}
    </IconButton>
  );
}
