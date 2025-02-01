"use client";

import { useProject } from "@/providers/project";
import { useSnackbar } from "@/providers/snackbar";
import { IconButton, Tooltip } from "@mui/material";
import { BookmarkAdd, BookmarkRemove } from "@mui/icons-material";

export default function FavoriteButton({ favoriteStatus, projectId }) {
  const { state, dispatch } = useProject();
  const { addSnack } = useSnackbar();

  const onFavoriteHandle = () => {
    favoriteStatus ? dispatch({ type: "unlike", projectId }) : dispatch({ type: "like", projectId });
    addSnack(`The project successfully ${favoriteStatus ? "removed from favorites 😮" : "added to favorites 😀"}`, favoriteStatus ? "info" : "success");
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
