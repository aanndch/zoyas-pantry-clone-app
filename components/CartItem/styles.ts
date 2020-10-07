import { StyleSheet } from "react-native";
import COLORS from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
    paddingVertical: 15,
    borderRadius: 15,
    elevation: 2,
    marginHorizontal: 20,
    marginBottom: 15,
    backgroundColor: "#fafafa",
    padding: 15,
  },
  favoriteIcon: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1,
  },
  content: {
    flexDirection: "row",
  },
  details: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "space-between",
  },
  image: {
    height: 100,
    width: 80,
    borderRadius: 5,
    resizeMode: "cover",
  },
  heading: {
    justifyContent: "center",
    flexShrink: 1,
    marginBottom: 20,
  },
  weight: {
    fontFamily: "PTSans_400Regular",
    fontSize: 11,
    color: "black",
    letterSpacing: 0.3,
  },
  name: {
    fontFamily: "PTSans_700Bold",
    marginRight: 20,
    color: COLORS.black,
    fontSize: 15,
    letterSpacing: 0.3,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontFamily: "PTSans_400Regular",
    color: COLORS.black,
    fontSize: 15,
    letterSpacing: 0.3,
  },
});

export default styles;
