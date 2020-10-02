import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17aba6",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    height: 40,
    width: "100%",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontSize: 15,
    fontFamily: "PTSans_700Bold",
    color: "#ffffff",
    marginLeft: 13,
  },
  filters: {
    marginTop: 50,
    position: "absolute",
    minHeight: 300,
    zIndex: 1,
    maxHeight: Dimensions.get("window").height * 0.75,
    width: "100%",
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    shadowColor: "#8d8d8d26",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 25,
  },
});

export default styles;
