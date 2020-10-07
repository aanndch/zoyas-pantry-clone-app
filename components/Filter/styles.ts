import { Dimensions, StyleSheet } from "react-native";
import COLORS from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
    position: "absolute",
    top: 10,
    left: 0,
    zIndex: 1,
    height: 40,
    width: "100%",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
  },
  headingText: {
    fontSize: 15,
    fontFamily: "PTSans_700Bold",
    color: "#ffffff",
    marginLeft: 13,
  },
  filters: {
    marginTop: 65,
    position: "absolute",
    minHeight: 300,
    zIndex: 1,
    maxHeight: Dimensions.get("window").height * 0.74,
    width: "100%",
    paddingHorizontal: 25,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    shadowColor: "#8d8d8d26",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 25,
  },
  hideFilters: {
    display: "none",
  },
  filterFooter: {
    paddingBottom: 15,
  },
  filterTags: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  filterTag: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: COLORS.green,
    borderWidth: 0.5,
    borderRadius: 50,
  },
  filterTagText: {
    fontFamily: "PTSans_400Regular",
    marginRight: 7,
  },
  filterTagIcon: {
    color: COLORS.green,
  },
  clearAllButton: {
    alignSelf: "flex-start",
  },
  clearAll: {
    marginTop: 10,
    fontFamily: "PTSans_400Regular",
    textDecorationLine: "underline",
    fontSize: 15,
  },
});

export default styles;
