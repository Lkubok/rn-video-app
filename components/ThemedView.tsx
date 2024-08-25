import { View, type ViewProps } from "react-native";

import { useAppTheme } from "@/app/_layout";

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

  return (
    <View
      style={[{ backgroundColor: colors.secondaryBackground }, style]}
      {...otherProps}
    />
  );
}
