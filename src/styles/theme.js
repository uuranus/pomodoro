
export const tabletMinWidth = "600px"
export const desktopMinWidth = "1136px"

export const ThemeColor = {
  BLACK:"black",
  RED:"red",
  GREEN:"green",
  YELLOW:"yellow",
  BLUE:"blue"
};

export const theme = {
  [ThemeColor.BLACK] : {
      primary: "#222222",
      primaryVariant: "#222222",
      onPrimary: "#FFFFFF",
      onPrimaryVariant: "#FFFFFF",
      background: "#FFFFFF",
      onBackground: "#222222",
      surface: "#222222",
      onSurface: "#222222",
      scale: {
        100: "#000000",
        90: "#111111",
        80: "#222222",
        70: "#333333",
        60: "#444444",
        50: "#666666",
        40: "#888888",
        30: "#AAAAAA",
        20: "#CCCCCC",
        10: "#FFFFFF"
      }
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
    scale: {
      100: "#1A0F0F",
      90: "#331C1D",
      80: "#4D2A2B",
      70: "#664041",
      60: "#8C5456",
      50: "#A7686A",
      40: "#C27C7F",
      30: "#D99A9C",
      20: "#EFC0C1",
      10: "#FFE6E6"
    }
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
    scale: {
      100: "#0F130F",
      90: "#1F2A1E",
      80: "#364638",
      70: "#4D614A",
      60: "#57715A",
      50: "#6F8B70",
      40: "#88A686",
      30: "#A3C2A1",
      20: "#CFE5CC",
      10: "#F0F9EF"
    }
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
    scale: {
      100: "#1F1807",
      90: "#3C2F0D",
      80: "#594614",
      70: "#967228",
      60: "#C9A038",
      50: "#D7AE4C",
      40: "#E5BD6B",
      30: "#F1D99C",
      20: "#FCEFC8",
      10: "#FFF9ED"
    }
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
    scale: {
      100: "#0D1420",
      90: "#1A283F",
      80: "#2E3F61",
      70: "#40577F",
      60: "#5170A6",
      50: "#6D89BA",
      40: "#8AA3CE",
      30: "#B3C5E1",
      20: "#DEE7F4",
      10: "#F6FAFD"
    }
  }

}



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
  