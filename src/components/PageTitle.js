"use client";

import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const StyledHeading = styled(Typography)(() => ({
  fontSize: "24px",
  fontWeight: 700,
  textTransform: "uppercase"
}));

export default function PageTitle({ title, variant = "body1" }) {
  return <StyledHeading variant={variant}>{title}</StyledHeading>;
}
