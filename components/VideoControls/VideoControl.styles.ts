import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fullScreenIcon: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  mediumIcon: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  bigIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
    margin: 64,
  },
  container: {
    position: "absolute",
    top: 0,
    height: 280,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "100%",
  },
  controlsBottom: {
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 24,
  },
  controlsCenter: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  controlsHeader: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 24,
    width: "100%",
  },
  topRightControls: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
