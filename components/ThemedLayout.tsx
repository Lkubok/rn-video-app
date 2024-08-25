import { View, type ViewProps } from "react-native";

import { useAppTheme } from "@/ui/theme";

export type ThemedLayoutProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: "primary" | "secondary";
};

export function ThemedLayout({
  style,
  lightColor,
  darkColor,
  variant,
  ...otherProps
}: ThemedLayoutProps) {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        {
          backgroundColor:
            variant === "secondary"
              ? colors.secondaryBackground
              : colors.background,
        },
        { paddingHorizontal: 24 }, // Global horizontal padding in the App
        style,
      ]}
      {...otherProps}
    />
  );
}
