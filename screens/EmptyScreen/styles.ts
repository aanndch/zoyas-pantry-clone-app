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
});

export default styles;
