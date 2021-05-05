import { StyleSheet } from "react-native";
import { PTSans } from "../../constants";

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b0e3d9",
  },
  text: {
    fontFamily: PTSans.Bold,
    fontSize: 16,
  },
});

export default styles;
