import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

import { useAppTheme } from "@/app/_layout";
import { i18n } from "@/translations/i18n";

import { styles } from "./TexstLink.styles";

type Props = {
  text: string;
  onPress: () => void;
};

export const TextLink = ({ onPress, text }: Props) => {
  const { colors } = useAppTheme();
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text
        style={[styles.bottomLink, { color: colors.primary }]}
        variant="labelMedium"
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
