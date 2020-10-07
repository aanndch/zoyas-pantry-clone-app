import { StyleSheet } from "react-native";
import COLORS from "../../../colors";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: "PTSans_700Bold",
    letterSpacing: 0.3,
  },
  option: {
    paddingTop: 15,
  },
  optionText: {
    fontFamily: "PTSans_400Regular",
    fontSize: 14,
    color: COLORS.black,
  },
  selectedOptionText: {
    fontFamily: "PTSans_700Bold",
    fontSize: 14,
    color: COLORS.green,
  },
});

export default styles;
