import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 20,
    position: "relative",
  },
  image: {
    marginTop: 10,
    resizeMode: "cover",
    width: "100%",
    height: 350,
  },
  favoriteIcon: {
    position: "absolute",
    zIndex: 1,
    top: 20,
    left: 10,
  },
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
  details: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tags: {
    flexDirection: "row",
    alignItems: "center",
  },
  tagInfo: {
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  tagImage: {
    height: 22,
    width: 22,
  },
  tagName: {
    fontFamily: "PTSans_400Regular",
    fontSize: 10,
    marginTop: 3,
  },
  price: {
    fontFamily: "PTSans_700Bold",
    fontSize: 18,
  },
  metaContainer: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  meta: {
    flexDirection: "row",
  },
  metaHeading: {
    fontFamily: "PTSans_400Regular",
    fontSize: 14,
    marginRight: 10,
    letterSpacing: 0.3,
  },
  metaText: {
    fontFamily: "PTSans_700Bold",
    fontSize: 14,
    letterSpacing: 0.3,
  },
});

export default styles;
