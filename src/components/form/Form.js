"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProject } from "@/providers/project";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FormRow from "@/components/form/FormRow";

export default function Form({ formType, projectData = null }) {
  const router = useRouter();
  const { state, dispatch } = useProject();
  const [formData, setFormData] = useState({
    id: projectData?.id || "",
    name: projectData?.name || "",
    desc: projectData?.desc || "",
    start: projectData?.start || new Date(Date.now()).toISOString().substring(0, 10),
    end: projectData?.end || "",
    manager: projectData?.manager || ""
  });

  const onHandleSubmit = formType => {
    switch (formType) {
      case "create":
        dispatch({ type: "add", project: { ...formData, favorite: false } });
        break;
      case "update":
        dispatch({ type: "edit", project: { id: formData.id, data: formData } });
        break;
    }
    router.push("/projects");
  };

  return (
    <Grid container rowSpacing={2} columnSpacing={6}>
      <FormRow id="id" name="Project ID" setFormData={setFormData} formData={formData} disabled={formType === "update"} />
      <FormRow id="name" name="Project Name" setFormData={setFormData} formData={formData} />
      <FormRow id="desc" name="Description" rows={5} setFormData={setFormData} formData={formData} />
      <FormRow id="start" name="Start Date" type="date" setFormData={setFormData} formData={formData} />
      <FormRow id="end" name="End Date" type="date" setFormData={setFormData} formData={formData} />
      <FormRow id="manager" name="Project Manager" setFormData={setFormData} formData={formData} />
      <Grid size={2}></Grid>
      <Grid size={10}>
        <Button variant="contained" onClick={() => onHandleSubmit(formType)}>
          {formType}
        </Button>
      </Grid>
    </Grid>
  );
}
