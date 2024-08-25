import { Ionicons } from "@expo/vector-icons"; // Ensure you have @expo/vector-icons installed
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { useAppTheme } from "@/ui/theme";

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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 44,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
  },
});

export default SearchBar;
