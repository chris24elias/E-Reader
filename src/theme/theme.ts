import { extendTheme } from "native-base";

const Spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
};

const Colors = {
  mainBackground: "#FFFFFF",
  cardBackground: "#dcdde1",
  primary: "#3E4685",
  secondary: "#169BD6",
  cardPrimaryBackground: "#D2D5Df",
  black: "#0B0B0B",
  white: "#FFFFFF",
};

const reg = {
  // fontFamily: '',
  letterSpacing: 0,
  fontWeight: "400",
};

const med = {
  // fontFamily: '',
  letterSpacing: 0.15,
  fontWeight: "500",
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
        // TEXT VARIANTS FOR BUTTON, must follow pattern : button_variantName
        button_primary: {
          fontSize: 16,
          fontWeight: "600",
          lineHeight: 18,
        },
        button_secondary: {
          fontSize: 16,
          fontWeight: "600",
          lineHeight: 20,
        },
        button_ghost: {
          fontWeight: "500",
          textAlign: "center",
          fontSize: 12,
          lineHeight: 16,
        },
        ///////////

        displayLarge: {
          ...reg,
          lineHeight: 64,
          fontSize: 57,
        },
        displayMedium: {
          ...reg,
          lineHeight: 52,
          fontSize: 45,
        },
        displaySmall: {
          ...reg,
          lineHeight: 44,
          fontSize: 36,
        },

        headlineLarge: {
          ...reg,
          lineHeight: 40,
          fontSize: 32,
        },
        headlineMedium: {
          ...reg,
          lineHeight: 36,
          fontSize: 28,
        },
        headlineSmall: {
          ...reg,
          lineHeight: 32,
          fontSize: 24,
        },

        titleLarge: {
          ...reg,
          lineHeight: 28,
          fontSize: 22,
        },
        titleMedium: {
          ...med,
          lineHeight: 24,
          fontSize: 16,
        },
        titleSmall: {
          ...med,
          letterSpacing: 0.1,
          lineHeight: 20,
          fontSize: 14,
        },

        labelLarge: {
          ...med,
          letterSpacing: 0.1,
          lineHeight: 20,
          fontSize: 14,
        },
        labelMedium: {
          ...med,
          letterSpacing: 0.5,
          lineHeight: 16,
          fontSize: 12,
        },
        labelSmall: {
          ...med,
          letterSpacing: 0.5,
          lineHeight: 16,
          fontSize: 11,
        },

        bodyLarge: {
          ...med,
          fontWeight: "400",
          lineHeight: 24,
          fontSize: 16,
        },
        bodyMedium: {
          ...med,
          fontWeight: "400",
          letterSpacing: 0.25,
          lineHeight: 20,
          fontSize: 14,
        },
        bodySmall: {
          ...med,
          fontWeight: "400",
          letterSpacing: 0.4,
          lineHeight: 16,
          fontSize: 12,
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
