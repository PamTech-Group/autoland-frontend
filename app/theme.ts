// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  breakpoints: {
    base: "0em",
    sm: "20em", // 320px
    mini: "31.25em", // 500px
    md: "48em", // 768px
    lg: "60em", // 960px
    xl: "68.75em", // 1100px
    myxl: "76.25em", // 1220px
    // myxxl: "75.85em", // 1310px
    dxl: "87.5em", // 1400px
    ddxl: "106.25em", // 1700px
    dddxl: "125em", // 2000px
    xdxl: "175em", // 2800px
  },
  vmargin: "3rem",
  colors: {
    primaryBlue: "#00204F",
    secondaryBlue: "#0D2B57",
    backgroundWhite: "#FFFFFF",
    mildBackground: "#E4EDF6",
    whiteText: "#FAF9F6",
    buttonOrange: "#FF0000",
    backgroundCard: "#FFFFFC",
    text: "#333333",
    inputBg: "#33333333",
  },
  fontSizes: {
    xs: ".7rem",
    sm: "1rem",
    md: "1.2rem",
    lg: "1.5rem",
    xl: "1.8rem",
    xxl: "2rem",
    xxxl: "2.5rem",
    xxxxl: "3rem",
  },
  fontWeights: {
    light: 100,
    normal: 300,
    medium: 400,
    bold: 500,
    thick: 700,
  },

  borders: {
    thin: "1px solid",
    thick: "2px solid",
    primary: "2px solid #0B9243",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gradientBg: {
    bgColor: "#D3D7D5",
    bgGradient:
      "linear-gradient(120deg, rgba(1,11,21,1) 0%, rgba(4,4,121,1) 37%, rgba(0,15,130,1) 48%, rgba(11,1,45,1) 100%)",
  },
  greenGradient: {
    bgColor: " rgb(10,245,125)",
    bgGradient:
      "linear-gradient(90deg, rgba(9,177,91,1) 20%, rgba(2,9,83,1) 73%)",
  },
  neonGradient: {
    bgColor: "rgb(10,245,125)",
    bgGradient:
      "linear-gradient(90deg, rgba(57,255,20,1) 20%, rgba(138,43,226,1) 73%)",
  },
  buttonRadius: {
    radius: "10px",
  },
  buttonPadding: "1rem 1.5rem",
  boxShadow: `0px 4px 6px 2px rgba(11, 1, 45, 0.5)`,
  customBoxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Added custom box shadow
  customBorderRadius: "0.5rem", // Added custom border radius
});

export default theme;
