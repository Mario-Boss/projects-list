"use client";

import { Box } from "@mui/material";
import Form from "@/components/form/Form";

export default function NewProject() {
  return (
    <Box sx={{ flexGrow: 1, pt: 8 }}>
      <Form formType="create" />
    </Box>
  );
}
