import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: "#b0e3d9",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    marginTop: 3,
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  buttonShadow: {
    backgroundColor: "#17aba6",
    height: 30,
    marginTop: -25,
    borderRadius: 50,
    zIndex: -1,
  },
});

export default styles;