import { extendTheme } from "native-base";

const Spacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  s: 12,
  m: 14,
  l: 16,
};

const theme = extendTheme({
  // colors: Colors,
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
