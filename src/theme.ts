import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  //   colors: {
  //    gray: {
  //      50: "#d3d3d3",  // Lightest shade
  //      100: "#b3b3b3",
  //      200: "#898989",
  //      300: "#636363",
  //      400: "#404040",
  //      500: "#2e2e2e",
  //      600: "#202020",
  //      700: "#121212",
  //      800: "#0a0a0a",
  //      900: "#000000",  // Darkest shade
  //    },
  //  },

  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#636363",
      400: "#404040",
      500: "#2e2e2e",
      600: "#202020",
      //   300: "#b3b3b3",
      //   400: "#a0a0a0",
      //   500: "#898989",
      //   600: "#636363",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
});

export default theme;

// colors: {
//    gray: {
//      50: "#f9f9f9",
//      100: "#ededed",
//      200: "#d3d3d3",
//      300: "#b3b3b3",
//      400: "#a0a0a0",
//      500: "#898989",
//      600: "#636363",
//      700: "#202020",
//      800: "#121212",
//      900: "#111",
//    },
//  },
