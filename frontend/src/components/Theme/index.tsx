import { ThemeProvider } from "styled-components";
const Theme = ({ children }: any) => {
  const theme = {
    breakpoints: {
      large: "1024px",
      medium: "768px",
      small: "480px",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
