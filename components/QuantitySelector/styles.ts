import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  quantitySelector: {
    width: 110,
    height: 35,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#17aba6",
    borderWidth: 2,
    borderRadius: 50,
  },
  quantityButtons: {
    color: "#17aba6",
    fontSize: 20,
  },
  quantity: {
    color: "#252525",
    fontSize: 17,
    fontFamily: "PTSans_700Bold",
    textAlign: "center",
  },
});

export default styles;
