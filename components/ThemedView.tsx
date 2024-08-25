import { View, type ViewProps } from "react-native";
import { useTheme } from "react-native-paper";

import { useAppTheme } from "@/app/_layout";

// import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const { colors } = useAppTheme();

  // const backgroundColor = useThemeColor(
  // { light: lightColor, dark: darkColor },
  // "background"
  // );

  return (
    <View
      style={[{ backgroundColor: colors.secondaryBackground }, style]}
      {...otherProps}
    />
  );
}
