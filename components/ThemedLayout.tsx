import { View, type ViewProps } from "react-native";

import { useAppTheme } from "@/ui/theme";

export type ThemedLayoutProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedLayout({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedLayoutProps) {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        { backgroundColor: colors.secondaryBackground },
        { paddingHorizontal: 32 }, // Global horizontal padding in the App
        style,
      ]}
      {...otherProps}
    />
  );
}
