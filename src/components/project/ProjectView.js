"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectViewRow from "@/components/project/ProjectViewRow";

export default function ProjectView({ projectData }) {
  return (
    <Grid container rowSpacing={2} columnSpacing={6}>
      <ProjectViewRow data={projectData?.id} showFavoriteButton={true} favoriteStatus={projectData?.favorite} name="Project ID" />
      <ProjectViewRow data={projectData?.name} name="Project Name" />
      <ProjectViewRow data={projectData?.desc} name="Description" />
      <ProjectViewRow data={projectData?.start} name="Start Date" />
      <ProjectViewRow data={projectData?.end} name="End Date" />
      <ProjectViewRow data={projectData?.manager} name="Project Manager" />
      <Grid size={2} align="right">
        <Link href="/projects">
          <Button variant="contained">Back</Button>
        </Link>
      </Grid>
      <Grid size={10}>
        <Link href={`/projects/${projectData?.id}/edit`}>
          <Button variant="contained">Edit</Button>
        </Link>
      </Grid>
    </Grid>
  );
}
