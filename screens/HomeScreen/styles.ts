import { StyleSheet } from "react-native";
import COLORS from "../../colors";
import { Poppins } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },
  banner: {
    backgroundColor: "#edf6f5",
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },
  textContainer: {
    paddingBottom: 20,
  },
  headingText: {
    fontFamily: Poppins.ExtraLight,
    fontSize: 23,
    marginBottom: 15,
  },
  textBold: {
    fontFamily: Poppins.Bold,
    fontSize: 23,
  },
  text: {
    fontFamily: Poppins.Regular,
    fontSize: 10,
  },
});

export default styles;
