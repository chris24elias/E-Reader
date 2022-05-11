import { extendTheme } from "native-base";

const Spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
};

const Colors = {
  mainBackground: "#F0F2F3",
  cardBackground: "#dcdde1",
  primary: "#3E4685",
  secondary: "#169BD6",
  cardPrimaryBackground: "#D2D5Df",
  black: "#0B0B0B",
  white: "#F0F2F3",
};

const theme = extendTheme({
  colors: Colors,
  space: Spacing,

  components: {
    Text: {
      defaultProps: {},
      variants: {
        header: {
          fontWeight: "bold",
          fontSize: 34,
          lineHeight: 42.5,
          // color: "black",
        },
        subheader: {
          fontWeight: "600",
          fontSize: 24,
          lineHeight: 36,
          // color: "black",
        },
        body: {
          fontSize: 16,
          lineHeight: 24,
          // color: "black",
        },
      },
    },
  },
});

type CustomThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}

export default theme;
