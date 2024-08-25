import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";

import { ButtonMode } from "@/types/types";

import { styles } from "./ThemedButton.styles";

type Props = {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  mode?: ButtonMode;
};

export const ThemedButton = ({
  text,
  style,
  onPress,
  mode = "contained",
}: Props) => {
  const { colors } = useTheme();
  return (
    <Button
      style={StyleSheet.flatten([styles.container, style])}
      mode={mode}
      onPress={onPress}
    >
      <Text
        style={{ color: colors.onPrimary, fontWeight: "100" }}
        variant="titleMedium"
      >
        {text}
      </Text>
    </Button>
  );
};
