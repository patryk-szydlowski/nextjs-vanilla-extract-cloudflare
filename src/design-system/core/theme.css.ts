import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const [baseTheme, variables] = createTheme({
  fonts: {
    body: "system-ui",
  },
  space: {
    large: "16px",
    medium: "8px",
    small: "4px",
  },
});

export const colors = createThemeContract({
  background: {
    primary: null,
    secondary: null,
  },
  foreground: {
    primary: null,
    secondary: null,
  },
});

export const lightTheme = createTheme(colors, {
  background: {
    primary: "#FFFFFF",
    secondary: "#c5c5c5",
  },
  foreground: {
    primary: "#000000",
    secondary: "#525252",
  },
});

export const darkTheme = createTheme(colors, {
  background: {
    primary: "#000000",
    secondary: "#525252",
  },
  foreground: {
    primary: "#FFFFFF",
    secondary: "#c5c5c5",
  },
});
