import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingHorizontal: 10,
    paddingBottom: 15,
    backgroundColor: "#ffffff",
  },
  favoriteIcon: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  image: {
    height: 350,
    width: "100%",
    resizeMode: "contain",
  },
  details: {},
  categoryName: {
    fontFamily: "PTSans_400Regular",
    fontSize: 11,
    marginBottom: 7,
  },
  name: {
    fontFamily: "PTSans_400Regular",
    fontSize: 15,
  },
  footer: {
    marginTop: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontFamily: "PTSans_700Bold",
    fontSize: 18,
    letterSpacing: 0.3,
  },
});

export default styles;
