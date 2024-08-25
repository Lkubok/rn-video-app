import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 44,
    flex: 1,
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
