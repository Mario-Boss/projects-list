"use client";

import Grid from "@mui/material/Grid2";
import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <Grid sx={{ mt: 8 }}>
      <Skeleton height={60}  />
      <Skeleton height={60} animation="wave" />
      <Skeleton height={60}  />
      <Skeleton height={60}  animation="wave" />
      <Skeleton height={60}  />
      <Skeleton height={60}  animation="wave" />
    </Grid>
  );
}
