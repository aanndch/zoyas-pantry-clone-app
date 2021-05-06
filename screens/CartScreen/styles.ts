import { StyleSheet } from "react-native";
import COLORS from "../../colors";
import { PTSans } from "../../constants";

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 35,
    paddingTop: 80,
  },
  image: {
    height: 40,
    width: 40,
    resizeMode: "contain",
    marginBottom: 5,
  },
  heading: {
    fontSize: 25,
    fontFamily: PTSans.Bold,
    marginBottom: 30,
    letterSpacing: 0.3,
  },
  subheading: {
    fontSize: 13,
    fontFamily: PTSans.Regular,
    marginBottom: 10,
    letterSpacing: 0.3,
  },
  cartContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  cartHeading: {
    fontSize: 16,
    fontFamily: PTSans.Bold,
    marginBottom: 15,
    letterSpacing: 0.3,
    marginHorizontal: 20,
  },
  totalContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  totalTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  totalText: {
    fontFamily: PTSans.Regular,
    fontSize: 14,
    letterSpacing: 0.3,
  },
  totalTextBold: {
    fontFamily: PTSans.Bold,
    fontSize: 14,
    letterSpacing: 0.3,
  },
  checkoutButton: {
    marginHorizontal: 20,
  },
});

export default styles;
