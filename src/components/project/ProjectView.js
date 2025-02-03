"use client";

import { styled } from "@mui/material/styles";
import Link from "next/link";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectViewRow from "@/components/project/ProjectViewRow";

const StyledLeftGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "flex-start"
  }
}));

const StyledRightGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "flex-end"
  }
}));

export default function ProjectView({ projectData }) {
  return (
    <Grid container spacing={0} sx={{ mb: 8 }}>
      <Grid size={{ xs: 10, lg: 8, xl: 9 }}>
        <Grid container rowSpacing={6} columnSpacing={6}>
          <ProjectViewRow data={projectData?.id} name="Project ID" />
          <ProjectViewRow data={projectData?.name} name="Project Name" />
          <ProjectViewRow data={projectData?.desc} name="Description" />
          <ProjectViewRow data={projectData?.start} name="Start Date" />
          <ProjectViewRow data={projectData?.end} name="End Date" />
          <ProjectViewRow data={projectData?.manager} name="Project Manager" />
          <StyledLeftGrid size={{ xs: 6, lg: 4, xl: 3 }}>
            <Link href="/projects">
              <Button variant="outlined">Back</Button>
            </Link>
          </StyledLeftGrid>
          <StyledRightGrid size={{ xs: 6, lg: 8, xl: 9 }}>
            <Link href={`/projects/${projectData?.id}/edit`}>
              <Button variant="contained">Edit</Button>
            </Link>
          </StyledRightGrid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2, lg: 4, xl: 3 }}>
        <ProjectViewRow data={projectData?.id} showFavoriteButton={true} />
      </Grid>
    </Grid>
  );
}
