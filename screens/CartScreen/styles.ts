import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    backgroundColor: "#fafafa",
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
    fontFamily: "PTSans_700Bold",
    marginBottom: 30,
    letterSpacing: 0.3,
  },
  subheading: {
    fontSize: 13,
    fontFamily: "PTSans_400Regular",
    marginBottom: 10,
    letterSpacing: 0.3,
  },
  cartContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fafafa",
  },
  cartHeading: {
    fontSize: 16,
    fontFamily: "PTSans_700Bold",
    marginBottom: 30,
    letterSpacing: 0.3,
    paddingTop: 20,
  },
  totalContainer: {
    marginVertical: 30,
  },
  totalTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  totalText: {
    fontFamily: "PTSans_400Regular",
    fontSize: 14,
    letterSpacing: 0.3,
  },
  totalTextBold: {
    fontFamily: "PTSans_700Bold",
    fontSize: 14,
    letterSpacing: 0.3,
  },
});

export default styles;
