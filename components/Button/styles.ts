import { StyleSheet } from "react-native";
import COLORS from "../../colors";

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: "#b0e3d9",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    marginTop: 3,
    fontFamily: "PTSans_700Bold",
    fontSize: 13,
    color: "#402661",
    letterSpacing: 0.3,
  },
  buttonShadow: {
    backgroundColor: COLORS.green,
    height: 30,
    marginTop: -25,
    borderRadius: 50,
    zIndex: -1,
  },
});

export default styles;
