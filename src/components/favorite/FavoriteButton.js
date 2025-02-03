"use client";

import { useProject } from "@/providers/project";
import { useSnackbar } from "@/providers/snackbar";
import { IconButton, Tooltip } from "@mui/material";
import { BookmarkAdd, BookmarkRemove } from "@mui/icons-material";

export default function FavoriteButton({ projectId }) {
  const { state, dispatch } = useProject();
  const { addSnack } = useSnackbar();
  const {favorite} = state.projects.find(project => project.id === projectId);

  const onFavoriteHandle = () => {
    dispatch({ type: "switchFavorite", projectId });
    addSnack(`The project successfully ${favorite ? "removed from favorites 😮" : "added to favorites 😀"}`, favorite ? "info" : "success");
  };

  return (
    <IconButton size="large" aria-label="favorite" sx={{ mr: 4 }} onClick={onFavoriteHandle}>
      {favorite ? (
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
