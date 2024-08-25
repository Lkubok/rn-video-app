import { StyleSheet } from "react-native";

export const smallStyles = StyleSheet.create({
  itemContainer: {
    marginRight: 24,
    width: 180,
    marginBottom: 24,
  },
  title: {
    marginTop: 12,
    fontSize: 14,
  },
  thumbnail: {
    width: "100%",
    height: 112,
    borderRadius: 16,
  },
  date: {
    alignSelf: "flex-end",
  },
});

export const largeStyles = StyleSheet.create({
  itemContainer: {
    marginBottom: 24,
  },
  title: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "700",
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 16,
  },
  date: {
    alignSelf: "flex-end",
  },
  description: {
    marginTop: 12,
  },
});
