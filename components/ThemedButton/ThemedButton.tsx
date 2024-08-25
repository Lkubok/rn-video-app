import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Button, Text } from "react-native-paper";

import { styles } from "./ThemedButton.styles";

type Props = {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const ThemedButton = ({ text, style, onPress }: Props) => {
  return (
    <Button
      style={StyleSheet.flatten([styles.container, style])}
      mode="contained"
      onPress={onPress}
    >
      <Text>{text}</Text>
    </Button>
  );
};
