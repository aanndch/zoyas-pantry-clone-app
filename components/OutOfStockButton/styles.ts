import { StyleSheet } from "react-native";
import { PTSans } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#b0e3d9",
    borderWidth: 1,
    borderRadius: 50,
  },
  text: {
    fontFamily: PTSans.Regular,
    fontSize: 13,
    color: "#402661",
  },
});

export default styles;
