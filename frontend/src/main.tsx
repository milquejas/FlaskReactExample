import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"; // Lisää MUI:tä
import App from "./App.tsx";

// Luo MUI teema (voit muokata värejä ja muita asetuksia täällä)
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Esimerkiksi sininen
    },
    secondary: {
      main: "#9c27b0", // Esimerkiksi violetti
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />{" "}
      {/* CssBaseline nollaa tyylit ja käyttää MUI:n oletusasetuksia */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
