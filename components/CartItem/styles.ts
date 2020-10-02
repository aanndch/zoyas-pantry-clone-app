import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    borderTopWidth: 0.5,
    borderTopColor: "#b5b5b5",
  },
  details: {
    flexDirection: "row",
    marginBottom: 20,
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: "cover",
  },
  heading: {
    marginLeft: 20,
    justifyContent: "center",
  },
  category: {
    fontFamily: "PTSans_400Regular",
    color: "#b5b5b5",
    fontSize: 12,
    letterSpacing: 0.3,
  },
  name: {
    fontFamily: "PTSans_700Bold",
    color: "#252525",
    fontSize: 15,
    letterSpacing: 0.3,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  price: {
    fontFamily: "PTSans_400Regular",
    color: "#252525",
    fontSize: 15,
    letterSpacing: 0.3,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionText: {
    fontSize: 13,
    textDecorationLine: "underline",
    fontFamily: "PTSans_400Regular",
  },
});

export default styles;
