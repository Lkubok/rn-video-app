import { Ionicons } from "@expo/vector-icons"; // Ensure you have @expo/vector-icons installed
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { useAppTheme } from "@/ui/theme";

import { styles } from "./SearchBar.styles";

type Props = {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
  mode?: "button" | "input";
  onPress?: () => void;
};

const SearchBar = ({
  placeholder,
  value,
  onChangeText,
  style,
  mode = "input",
  onPress,
}: Props) => {
  const { colors } = useAppTheme();

  return (
    <>
      <View
        style={StyleSheet.flatten([
          styles.container,
          { borderColor: colors.primary },
          style,
        ])}
      >
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
        {mode === "button" && (
          <TouchableOpacity style={styles.asButton} onPress={onPress} />
        )}
      </View>
    </>
  );
};

export default SearchBar;
