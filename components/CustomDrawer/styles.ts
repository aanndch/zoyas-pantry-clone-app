import { StyleSheet } from "react-native";
import COLORS from "../../colors";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  drawerItem: {
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  drawerItemTextTeal: {
    color: COLORS.green,
    fontFamily: "PTSans_700Bold",
    fontSize: 16,
  },
  drawerItemText: {
    fontFamily: "PTSans_700Bold",
    fontSize: 16,
    color: "#212629",
  },
  drawerItemIcon: {
    marginLeft: 20,
  },
});

export default styles;
