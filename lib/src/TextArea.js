import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput } from "react-native";
import styles, { container, charCountStyle } from "./TextArea.style";

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charCount: 0
    };
  }

  onChangeText = text => {
    const { onChangeText } = this.props;
    this.setState({ charCount: text.length });

    if (onChangeText) onChangeText(text);
  };

  renderCharCount() {
    const { maxCharLimit, charCountColor, exceedCharCountColor } = this.props;
    const { charCount } = this.state;

    if (!maxCharLimit) return null;

    return (
      <Text
        style={charCountStyle(
          charCount > maxCharLimit ? exceedCharCountColor : charCountColor
        )}
      >{`${charCount}/${maxCharLimit}`}</Text>
    );
  }

  render() {
    const {
      maxCharLimit,
      charCountColor,
      backgroundColor,
      ...rest
    } = this.props;
    if (!!maxCharLimit) {
      rest.maxCharLimit = maxCharLimit;
    }
    return (
      <View style={container(backgroundColor)}>
        <TextInput
          multiline
          {...rest}
          style={styles.textInputStyle}
          onChangeText={this.onChangeText}
        />
        {this.renderCharCount()}
      </View>
    );
  }
}

TextArea.propTypes = {
  charCount: PropTypes.number,
  maxCharLimit: PropTypes.number,
  charCountColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  exceedCharCountColor: PropTypes.string
};

TextArea.defaultProps = {
  charCount: 0,
  maxCharLimit: 200,
  charCountColor: "#ccc",
  backgroundColor: "#fbfbfb",
  exceedCharCountColor: "red"
};
