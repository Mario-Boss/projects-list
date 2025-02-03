"use client";

import { styled } from "@mui/material/styles";
import { Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FavoriteButton from "@/components/favorite/FavoriteButton";

const StyledHeadingGrid = styled(Grid)(({theme}) => ({
  alignItems: "flex-start",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "flex-start"
  }
}));

export default function FormRow({ data, name = "", showFavoriteButton = false, favoriteStatus, leftColumn = { xs: 12, lg: 4, xl: 3 }, rightColumn = { xs: 12, lg: 8, xl: 9 } }) {
  return (
    <>
      {!showFavoriteButton && (<StyledHeadingGrid size={leftColumn}><strong>{name}</strong>:</StyledHeadingGrid>)}
      {!showFavoriteButton && (<StyledHeadingGrid size={rightColumn} sx={{ justifyContent: "flex-start" }}>
        <Typography>{data || <Skeleton height={24} width={200} animation="wave" />}</Typography>
      </StyledHeadingGrid>)}
      {showFavoriteButton && (
        <StyledHeadingGrid size={{ xs: 12 }} sx={{ justifyContent: "flex-start" }}>
          {favoriteStatus ? <FavoriteButton projectId={data} /> : <Skeleton variant="circular" width={60} height={60} />}
        </StyledHeadingGrid>
      )}
    </>
  );
}
