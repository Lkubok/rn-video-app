import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tab: {
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {},
  animatedTab: {
    position: "absolute",
    height: 2,
    backgroundColor: "blue",
    bottom: 0,
  },
  contentContainer: {},
  tabContent: {},
});
