import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-around",
  },
  info: {
    flexDirection: "row",
  },
  welcome: {
    alignSelf: "flex-start",
    marginBottom: 32,
  },
  footerTextBox: {
    marginVertical: 16,
    width: "100%",
    alignItems: "center",
  },
  infoText: {
    fontWeight: "400",
  },
});
