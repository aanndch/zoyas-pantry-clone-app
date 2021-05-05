import { StyleSheet } from "react-native";
import COLORS from "../../colors";

import { Poppins, PTSans } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  boldHeading: {
    fontFamily: PTSans.Bold,
    fontSize: 22,
    textAlign: "center",
    marginBottom: 5,
  },
  regularHeading: {
    fontSize: 22,
    textAlign: "center",
  },
  loginButton: {
    marginTop: 30,
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginTop: 8,
  },
  forgotButtonText: {
    color: "#777777",
    fontSize: 15,
    fontFamily: PTSans.Regular,
  },
  registerButton: {
    marginTop: 20,
    alignSelf: "center",
  },
  registerButtonText: {
    color: "#777777",
    fontSize: 15,
    textDecorationLine: "underline",
    fontFamily: PTSans.Regular,
  },
});

export default styles;
