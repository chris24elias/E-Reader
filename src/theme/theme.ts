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
      variants: {},
    },
  },
});

type CustomThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}

export default theme;
