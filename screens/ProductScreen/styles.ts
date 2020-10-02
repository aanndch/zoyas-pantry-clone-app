import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 20,
    position: "relative",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: 350,
  },
  favoriteIcon: {
    position: "absolute",
    zIndex: 1,
    top: 10,
    left: 30,
  },
  details: {},
  name: {
    fontFamily: "PTSans_700Bold",
    fontSize: 22,
    marginTop: 10,
    marginBottom: 3,
  },
  category: {
    fontFamily: "PTSans_400Regular",
    color: "#151515",
    fontSize: 12,
    letterSpacing: 0.3,
    marginBottom: 15,
  },
  description: {
    fontFamily: "PTSans_400Regular",
    fontSize: 13,
    textAlign: "justify",
  },
  footer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontFamily: "PTSans_700Bold",
    fontSize: 18,
  },
});

export default styles;
