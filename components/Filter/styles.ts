import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: "#ffffff",
    zIndex: 1,
    position: "absolute",
    top: 55,
    left: 0,
    paddingHorizontal: 15,
    width: "100%",
    borderRadius: 15,
    shadowColor: "#8d8d8d26",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 25,
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  filterText: {
    fontSize: 14,
    fontFamily: "PTSans_700Bold",
    letterSpacing: 0.3,
  },
});

export default styles;
