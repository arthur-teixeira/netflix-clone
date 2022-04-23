import { ThemeProvider } from "styled-components";
const Theme = ({ children }: any) => {
  const theme = {
    breakpoints: {
      large: "1024px",
      medium: "768px",
      small: "480px",
    },
    margins: {
      lg: "3.5rem",
      md: "2rem",
      sm: "1rem",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
