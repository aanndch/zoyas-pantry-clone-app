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
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
  },
  regularHeading: {
    fontSize: 22,
    textAlign: "center",
  },
  helpText: {
    fontSize: 14,
    fontFamily: PTSans.Regular,
    marginTop: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  forgotButton: {
    marginTop: 50,
    alignSelf: "center",
  },
});

export default styles;
