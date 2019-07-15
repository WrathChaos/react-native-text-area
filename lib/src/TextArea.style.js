export function charCountStyle(charCountColor) {
  return {
    bottom: 8,
    right: 16,
    fontSize: 14,
    position: "absolute",
    color: charCountColor
  };
}

export function container(backgroundColor) {
  return {
    width: "100%",
    height: 200,
    backgroundColor,
    textAlignVertical: "top"
  };
}

export default {
  textInputStyle: {
    margin: 16,
    height: "90%",
    backgroundColor: "transparent"
  }
};
