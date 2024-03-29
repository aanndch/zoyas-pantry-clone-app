import { StyleSheet } from "react-native";
import COLORS from "../../colors";
import { PTSans } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    position: "relative",
  },
  image: {
    marginTop: 5,
    resizeMode: "contain",
    width: "100%",
    height: 350,
  },
  favoriteIcon: {
    position: "absolute",
    zIndex: 1,
    top: 30,
    left: 10,
  },
  name: {
    fontFamily: PTSans.Bold,
    fontSize: 22,
    marginRight: 10,
    letterSpacing: 0.3,
  },
  weight: {
    fontSize: 12,
    marginBottom: 15,
    letterSpacing: 0.3,
  },
  category: {
    fontFamily: PTSans.Regular,
    color: "#151515",
    fontSize: 13,
    letterSpacing: 0.3,
  },
  description: {
    fontFamily: PTSans.Regular,
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
    fontFamily: PTSans.Regular,
    fontSize: 10,
    marginTop: 3,
  },
  price: {
    fontFamily: PTSans.Bold,
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
    fontFamily: PTSans.Regular,
    fontSize: 14,
    marginRight: 10,
    letterSpacing: 0.3,
  },
  metaText: {
    fontFamily: PTSans.Bold,
    fontSize: 14,
    letterSpacing: 0.3,
  },
});

export default styles;
