import { Ionicons } from "@expo/vector-icons"; // Ensure you have @expo/vector-icons installed
import React from "react";
import { TextInput, View } from "react-native";

import { useAppTheme } from "@/ui/theme";

import { styles } from "./SearchBar.styles";

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

const SearchBar = ({ placeholder, value, onChangeText }: Props) => {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.container, { borderColor: colors.primary }]}>
      <Ionicons
        name="search"
        size={20}
        color={colors.primary}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
