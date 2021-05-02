import { StyleSheet } from "react-native";
import COLORS from "../../colors";

const styles = StyleSheet.create({
  quantitySelector: {
    width: 110,
    height: 35,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: COLORS.green,
    borderWidth: 2,
    borderRadius: 50,
  },
  quantityButtons: {
    color: COLORS.green,
    fontSize: 20,
  },
  minusButton: {
    paddingLeft: 10,
  },
  plusButton: {
    paddingRight: 10,
  },
  quantity: {
    color: COLORS.black,
    fontSize: 17,
    fontFamily: "PTSans_700Bold",
    textAlign: "center",
    width: 40,
  },
});

export default styles;
