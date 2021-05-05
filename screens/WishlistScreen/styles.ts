import { StyleSheet } from "react-native";
import COLORS from "../../colors";
import { PTSans } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
  },
  headingContainer: {
    paddingTop: 50,
    marginBottom: 15,
  },
  heading: {
    fontSize: 30,
    fontFamily: PTSans.Bold,
    letterSpacing: 0.3,
  },
});

export default styles;
