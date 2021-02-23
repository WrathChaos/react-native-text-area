import { ViewStyle, TextStyle, StyleSheet } from "react-native";

export const _charCountStyle = (charCountColor: string): TextStyle => ({
  bottom: 8,
  right: 16,
  fontSize: 14,
  position: "absolute",
  color: charCountColor,
});

interface Style {
  container: ViewStyle;
  textInputStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
  },
  textInputStyle: {
    margin: 16,
    height: "90%",
    backgroundColor: "transparent",
  },
});
