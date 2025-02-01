"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function ProjectsTableHead() {
  return (
    <Grid align="right" sx={{ mb: 4 }}>
      <Link href="/projects/new">
        <Button variant="contained">Create Project</Button>
      </Link>
    </Grid>
  );
}
