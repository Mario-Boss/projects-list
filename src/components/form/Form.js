"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProject } from "@/providers/project";
import { useSnackbar } from "@/providers/snackbar";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FormRow from "@/components/form/FormRow";

export default function Form({ formType, projectData = null }) {
  const router = useRouter();
  const { state, dispatch } = useProject();
  const { addSnack } = useSnackbar();
  const [formData, setFormData] = useState({
    id: projectData?.id || "",
    name: projectData?.name || "",
    desc: projectData?.desc || "",
    start: projectData?.start || new Date(Date.now()).toISOString().substring(0, 10),
    end: projectData?.end || "",
    manager: projectData?.manager || ""
  });

  const onHandleSubmit = formType => {
    // added simple validation before sending the form - I would like to add Formik and validation schemam instead
    if (!formData.id || !formData.name || !formData.desc || !formData.end || !formData.manager) {
      addSnack("Please check the form and provide all required fields marked by * 👓", "warning");
    } else {
      switch (formType) {
        case "create":
          dispatch({ type: "add", project: { ...formData, favorite: false } });
          addSnack("New project successfully added 🎉");
          break;
        case "update":
          dispatch({ type: "edit", project: { id: formData.id, data: formData } });
          addSnack("New project successfully updated 👍");
          break;
      }
      router.push("/projects");
    }
  };

  return (
    <Grid container rowSpacing={3} columnSpacing={6} sx={{ mb: 8 }}>
      <FormRow id="id" name="Project ID" setFormData={setFormData} formData={formData} disabled={formType === "update"} />
      <FormRow id="name" name="Project Name" setFormData={setFormData} formData={formData} />
      <FormRow id="desc" name="Description" rows={5} setFormData={setFormData} formData={formData} />
      <FormRow id="start" name="Start Date" type="date" setFormData={setFormData} formData={formData} />
      <FormRow id="end" name="End Date" type="date" setFormData={setFormData} formData={formData} />
      <FormRow id="manager" name="Project Manager" setFormData={setFormData} formData={formData} />
      <Grid size={{ xs: 12, lg: 3, xl: 2 }}></Grid>
      <Grid size={{ xs: 12, lg: 9, xl: 10 }}>
        <Button variant="contained" onClick={() => onHandleSubmit(formType)}>
          {formType}
        </Button>
      </Grid>
    </Grid>
  );
}
