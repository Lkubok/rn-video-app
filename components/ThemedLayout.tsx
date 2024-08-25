import { View, type ViewProps } from "react-native";

import { useAppTheme } from "@/app/_layout";

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
      style={[{ backgroundColor: colors.secondaryBackground }, style]}
      {...otherProps}
    />
  );
}
