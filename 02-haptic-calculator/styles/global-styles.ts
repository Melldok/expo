import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    fontWeight: "400",
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
    fontWeight: "300",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    height: 80,
    justifyContent: "center",
    width: 80,
    marginHorizontal: 10,
  },
  buttonText: {
    color: Colors.textPrimary,
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    fontWeight: "300",
    fontFamily: "SpaceMono",
  },
});
