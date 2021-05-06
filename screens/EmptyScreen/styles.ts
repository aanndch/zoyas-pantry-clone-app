import { StyleSheet } from "react-native";
import COLORS from "../../colors";
import { PTSans } from "../../constants";

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 35,
    paddingTop: 150,
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
});

export default styles;
