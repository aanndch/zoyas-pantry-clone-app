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
    marginVertical: 10,
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
  quantitySelector: {
    width: 100,
    height: 30,
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
    fontFamily: 'PTSans_700Bold'
  },
});

export default styles;
