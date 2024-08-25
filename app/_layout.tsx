import "react-native-reanimated";

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import merge from "deepmerge";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  adaptNavigationTheme,
  configureFonts,
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  useTheme,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SessionProvider } from "@/core/auth/AuthContext";
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

const CombinedLightTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

export type AppTheme = typeof CombinedDarkTheme;
export const useAppTheme = () => useTheme<AppTheme>();

export default function Root() {
  SplashScreen.preventAutoHideAsync();
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme;

  const fontConfig = {
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
    labelMedium: {
      fontFamily: "PoppingLight",
      fontSize: 13,
      lineHeight: 16,
      // fontWeight: "400",
    },
  };

  const paperThemeWithFonts = {
    ...paperTheme,
    fonts: configureFonts({ config: fontConfig }),
  };

  // TODO: remove unnecessary fonts iun the end
  // NOTE: In fact i won't be deleting any fonts, but i'm aware they are not necessary and should be removed

  const [loaded] = useFonts({
    PoppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinsBlackItalic: require("../assets/fonts/Poppins-BlackItalic.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsBoldItalic: require("../assets/fonts/Poppins-BoldItalic.ttf"),
    PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsExtraBoldItalic: require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    PoppinsExtraLight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    PoppinsExtraLightItalic: require("../assets/fonts/Poppins-ExtraLightItalic.ttf"),
    PoppinsItalic: require("../assets/fonts/Poppins-Italic.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinsLightItalic: require("../assets/fonts/Poppins-LightItalic.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsMediumItalic: require("../assets/fonts/Poppins-MediumItalic.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsSemiBoldItalic: require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
    PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
    PoppinsThinItalic: require("../assets/fonts/Poppins-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperThemeWithFonts}>
        <ThemeProvider value={paperThemeWithFonts}>
          <SessionProvider>
            <Slot />
          </SessionProvider>
        </ThemeProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
