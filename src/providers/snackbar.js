"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { Alert, Snackbar } from "@mui/material";

export const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
  const [snacks, setSnacks] = useState([]);

  const addSnack = useCallback((message, type = "success") => {
    setSnacks(prev => [...prev, { message, type, key: new Date().getTime() }]);
  }, []);

  return (
    <SnackbarContext.Provider value={{ addSnack }}>
      {children}
      {snacks.map(snack => (
        <Snackbar
          key={snack.key}
          open
          autoHideDuration={6000}
          onClose={() => {
            setSnacks(prev => prev.filter(item => item.key !== snack.key));
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={() => {
              setSnacks(prev => prev.filter(item => item.key !== snack.key));
            }}
            severity={snack.type}
            sx={{ width: "100%", fontSize: "18px" }}
          >
            {snack.message}
          </Alert>
        </Snackbar>
      ))}
    </SnackbarContext.Provider>
  );
};
