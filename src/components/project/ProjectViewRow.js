"use client";

import { styled } from "@mui/material/styles";
import { Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FavoriteButton from "@/components/FavoriteButton";

const StyledHeadingGrid = styled(Grid)(() => ({
  alignItems: "flex-start",
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "38px",
  p: {
    width: "50%"
  }
}));

export default function FormRow({ data, name, showFavoriteButton = false, favoriteStatus, leftColumn = 2, rightColumn = 10 }) {
  return (
    <>
      <StyledHeadingGrid size={leftColumn}>{name}</StyledHeadingGrid>
      <StyledHeadingGrid size={showFavoriteButton ? 5 : rightColumn} sx={{ justifyContent: "flex-start" }}>
        <Typography>{data || <Skeleton height={24} animation="wave" />}</Typography>
      </StyledHeadingGrid>
      {showFavoriteButton && (
        <StyledHeadingGrid size={5} sx={{ justifyContent: "flex-start" }}>
          {favoriteStatus ? <FavoriteButton favoriteStatus={favoriteStatus} projectId={data} /> : <Skeleton variant="circular" width={60} height={60} />}
        </StyledHeadingGrid>
      )}
    </>
  );
}
