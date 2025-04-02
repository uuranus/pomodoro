export const tabletMinWidth = "600px";
export const desktopMinWidth = "1136px";

export const ThemeColor = {
  BLACK: "black",
  RED: "red",
  GREEN: "green",
  YELLOW: "yellow",
  BLUE: "blue",
};

export const theme = {
  [ThemeColor.BLACK]: {
    primary: "#222222",
    primaryVariant: "#222222",
    onPrimary: "#FFFFFF",
    onPrimaryVariant: "#FFFFFF",
    background: "#FFFFFF",
    onBackground: "#222222",
    surface: "#222222",
    onSurface: "#FFFFFF",

    scale100: "#000000",
    scale90: "#111111",
    scale80: "#222222",
    scale70: "#333333",
    scale60: "#444444",
    scale50: "#666666",
    scale40: "#888888",
    scale30: "#AAAAAA",
    scale20: "#CCCCCC",
    scale10: "#FFFFFF",
  },

  [ThemeColor.RED]: {
    primary: "#8C5456",
    primaryVariant: "#8C5456",
    onPrimary: "#FFFFFF",
    onPrimaryVariant: "#FFFFFF",
    background: "#FFFFFF",
    onBackground: "#8C5456",
    surface: "#8C5456",
    onSurface: "#FFFFFF",
    scale100: "#1A0F0F",
    scale90: "#331C1D",
    scale80: "#4D2A2B",
    scale70: "#664041",
    scale60: "#8C5456",
    scale50: "#A7686A",
    scale40: "#C27C7F",
    scale30: "#D99A9C",
    scale20: "#EFC0C1",
    scale10: "#FFE6E6",
  },
  [ThemeColor.GREEN]: {
    primary: "#57715A",
    primaryVariant: "#57715A",
    onPrimary: "#FFFFFF",
    onPrimaryVariant: "#FFFFFF",
    background: "#FFFFFF",
    onBackground: "#57715A",
    surface: "#57715A",
    onSurface: "#FFFFFF",
    scale100: "#0F130F",
    scale90: "#1F2A1E",
    scale80: "#364638",
    scale70: "#4D614A",
    scale60: "#57715A",
    scale50: "#6F8B70",
    scale40: "#88A686",
    scale30: "#A3C2A1",
    scale20: "#CFE5CC",
    scale10: "#F0F9EF",
  },
  [ThemeColor.YELLOW]: {
    primary: "#C9A038",
    primaryVariant: "#C9A038",
    onPrimary: "#FFFFFF",
    onPrimaryVariant: "#FFFFFF",
    background: "#FFFFFF",
    onBackground: "#C9A038",
    surface: "#C9A038",
    onSurface: "#FFFFFF",
    scale100: "#1F1807",
    scale90: "#3C2F0D",
    scale80: "#594614",
    scale70: "#967228",
    scale60: "#C9A038",
    scale50: "#D7AE4C",
    scale40: "#E5BD6B",
    scale30: "#F1D99C",
    scale20: "#FCEFC8",
    scale10: "#FFF9ED",
  },
  [ThemeColor.BLUE]: {
    primary: "#5170A6",
    primaryVariant: "#5170A6",
    onPrimary: "#FFFFFF",
    onPrimaryVariant: "#FFFFFF",
    background: "#FFFFFF",
    onBackground: "#5170A6",
    surface: "#5170A6",
    onSurface: "#FFFFFF",
    scale100: "#0D1420",
    scale90: "#1A283F",
    scale80: "#2E3F61",
    scale70: "#40577F",
    scale60: "#5170A6",
    scale50: "#6D89BA",
    scale40: "#8AA3CE",
    scale30: "#B3C5E1",
    scale20: "#DEE7F4",
    scale10: "#F6FAFD",
  },
};

const themeColorList = [
  { name: "blackLine", background: "#f9f9f9", primary: "#000000" },
  { name: "redLine", background: "#f9f9f9", primary: "#8C5456" },
  { name: "greenLine", background: "#f9f9f9", primary: "#57715A" },
  { name: "yellowLine", background: "#f9f9f9", primary: "#C9A038" },
  { name: "blueLine", background: "#f9f9f9", primary: "#5170A6" },
  { name: "blackBack", background: "#000000", primary: "#ffffff" },
  { name: "redBack", background: "#8C5456", primary: "#ffffff" },
  { name: "greenBack", background: "#57715A", primary: "#ffffff" },
  { name: "yellowBack", background: "#C9A038", primary: "#ffffff" },
  { name: "blueBack", background: "#5170A6", primary: "#ffffff" },
];

// export const theme = {
//   spacing: {
//     frameSpacing: "10px",
//     screenHorizontalMargin: {
//       mobile: "16px",
//       tablet: "32px",
//       desktop: "64px",
//     },
//     screenVerticalMargin: {
//       mobile: "12px",
//       tablet: "12px",
//       desktop: "12px",
//     },
//   },
//   border: {
//     mainFrame: "12px",
//     thinFrame: "1px"
//   },
//   typography: {
//     fontFamily: {
//       primary: "Playfair Display, serif",
//       timerCount: "Lora, serif"
//     },
//     headlineLarge: {
//       desktop: {
//         fontSize: "96px",
//         fontWeight: 400,
//         fontLineHeight: 1.5
//       },
//       tablet: {
//         fontSize: "64px",
//         fontWeight: 400,
//         fontLineHeight: 1.5
//       },
//       mobile: {
//         fontSize: "32px",
//         fontWeight: 400,
//         fontLineHeight: 1.5
//       }
//     },
//     headlineMedium: {
//       desktop: {
//         fontSize: "72px",
//         fontWeight: 400,
//         fontLineHeight: 1.5
//       },
//       tablet: {
//         fontSize: "48px",
//         fontWeight: 400,
//         fontLineHeight: 1.5
//       },
//       mobile: {
//         fontSize: "24px",
//         fontWeight: 400,
//         fontLineHeight: 1.5
//       }
//     },
//     headlineSmall: {
//       desktop: {
//         fontSize: "48px",
//         fontWeight: 400,
//         fontLineHeight: 1.5
//       },
//       tablet: {
//         fontSize: "32px",
//         fontWeight: 400,
//         fontLineHeight: 1.5
//       },
//       mobile: {
//         fontSize: "16px",
//         fontWeight: 400,
//         fontLineHeight: 1.5
//       }
//     },
//     titleLarge: {
//       desktop: {
//         fontSize: "33.33px",
//         fontWeight: 400,
//         fontLineHeight: 1.4
//       },
//       tablet: {
//         fontSize: "28px",
//         fontWeight: 400,
//         fontLineHeight: 1.4
//       },
//       mobile: {
//         fontSize: "24px",
//         fontWeight: 400,
//         fontLineHeight: 1.4
//       }
//     },
//     titleMedium: {
//       desktop: {
//         fontSize: "24px",
//         fontWeight: 400,
//         fontLineHeight: 1.4
//       },
//       tablet: {
//         fontSize: "20px",
//         fontWeight: 400,
//         fontLineHeight: 1.4
//       },
//       mobile: {
//         fontSize: "18px",
//         fontWeight: 400,
//         fontLineHeight: 1.4
//       }
//     },
//     titleSmall: {
//       desktop: {
//         fontSize: "20px",
//         fontWeight: 400,
//         fontLineHeight: 1.4
//       },
//       tablet: {
//         fontSize: "18px",
//         fontWeight: 400,
//         fontLineHeight: 1.4
//       },
//       mobile: {
//         fontSize: "16px",
//         fontWeight: 400,
//         fontLineHeight: 1.4
//       }
//     },
//     labelLarge: {
//       desktop: {
//         fontSize: "18px",
//         fontWeight: 500,
//         fontLineHeight: 1.2
//       },
//       tablet: {
//         fontSize: "16px",
//         fontWeight: 500,
//         fontLineHeight: 1.2
//       },
//       mobile: {
//         fontSize: "14px",
//         fontWeight: 500,
//         fontLineHeight: 1.2
//       }
//     },
//     labelMedium: {
//       desktop: {
//         fontSize: "16px",
//         fontWeight: 500,
//         fontLineHeight: 1.2
//       },
//       tablet: {
//         fontSize: "14px",
//         fontWeight: 500,
//         fontLineHeight: 1.2
//       },
//       mobile: {
//         fontSize: "12px",
//         fontWeight: 500,
//         fontLineHeight: 1.2
//       }
//     },
//     labelSmall: {
//       desktop: {
//         fontSize: "14px",
//         fontWeight: 500,
//         fontLineHeight: 1.2
//       },
//       tablet: {
//         fontSize: "12px",
//         fontWeight: 500,
//         fontLineHeight: 1.2
//       },
//       mobile: {
//         fontSize: "10px",
//         fontWeight: 500,
//         fontLineHeight: 1.2
//       }
//     },
//     bodyLarge: {
//       desktop: {
//         fontSize: "18px",
//         fontWeight: 400,
//         fontLineHeight: 1.6
//       },
//       tablet: {
//         fontSize: "16px",
//         fontWeight: 400,
//         fontLineHeight: 1.6
//       },
//       mobile: {
//         fontSize: "14px",
//         fontWeight: 400,
//         fontLineHeight: 1.6
//       }
//     },
//     bodyMedium: {
//       desktop: {
//         fontSize: "16px",
//         fontWeight: 400,
//         fontLineHeight: 1.6
//       },
//       tablet: {
//         fontSize: "14px",
//         fontWeight: 400,
//         fontLineHeight: 1.6
//       },
//       mobile: {
//         fontSize: "12px",
//         fontWeight: 400,
//         fontLineHeight: 1.6
//       }
//     },
//     bodySmall: {
//       desktop: {
//         fontSize: "14px",
//         fontWeight: 400,
//         fontLineHeight: 1.6
//       },
//       tablet: {
//         fontSize: "12px",
//         fontWeight: 400,
//         fontLineHeight: 1.6
//       },
//       mobile: {
//         fontSize: "10px",
//         fontWeight: 400,
//         fontLineHeight: 1.6
//       }
//     }
//   }
// };
