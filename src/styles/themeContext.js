import { createContext, useContext } from "react";
import { ThemeColor } from "./theme";

export const ThemeContext = createContext({
  currentThemeColor: ThemeColor.BLACK,
  setCurrentThemeColor: (color) => {},
});

export const useThemeColor = () => useContext(ThemeContext);
