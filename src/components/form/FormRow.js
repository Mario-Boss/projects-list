"use client";

import { useRef } from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

const StyledHeadingGrid = styled(Grid)(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "flex-end"
}));

export default function FormRow({ id, name, type = "text", rows = null, setFormData, formData, leftColumn = 2, rightColumn = 10, disabled }) {
  const inputRef = useRef();

  const onHandleChange = e => {
    setFormData(prevState => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  return (
    <>
      <StyledHeadingGrid size={leftColumn}>{name}</StyledHeadingGrid>
      <Grid size={rightColumn}>
        <TextField
          inputRef={type === "date" ? inputRef : null}
          fullWidth
          disabled={disabled}
          label={type === "date" ? null : name}
          variant="outlined"
          id={id}
          type={type || "text"}
          rows={rows || null}
          multiline={rows || false}
          slotProps={{ tabIndex: "1" }}
          value={formData[id]}
          onChange={e => onHandleChange(e)}
          onFocus={() => {
            type === "date" && inputRef.current.showPicker();
          }}
        />
      </Grid>
    </>
  );
}
