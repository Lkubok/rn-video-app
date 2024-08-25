import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import merge from "deepmerge";
import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
  useTheme,
} from "react-native-paper";

import { colorsDark } from "@/ui/colorsDark";
import { colorsLight } from "@/ui/colorsLight";

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: { ...MD3DarkTheme.colors, ...colorsDark },
};
const customLightTheme = {
  ...MD3LightTheme,
  colors: { ...MD3LightTheme.colors, ...colorsLight },
};

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const CombinedLightTheme = merge(LightTheme, customLightTheme);
export const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

export type AppTheme = typeof CombinedDarkTheme;
export const useAppTheme = () => useTheme<AppTheme>();

export const fontConfig = {
  titleLarge: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 22,
    lineHeight: 24,
  },
  titleMedium: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
    lineHeight: 24,
  },
  titleSmall: {
    fontFamily: "PoppinsRegular",
    fontsize: 16,
    lineHeight: 24,
  },
  labelMedium: {
    fontFamily: "PoppinsLight",
    fontSize: 13,
    lineHeight: 16,
  },
};
