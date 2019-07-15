import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput } from "react-native";
import styles from "./TextArea.style";

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
    const { maxCharLength } = this.props;
    const { charCount } = this.state;

    if (!maxCharLength) return null;
    return (
      <Text
        style={styles.charCountStyle}
      >{`${charCount}/${maxCharLength}`}</Text>
    );
  }

  render() {
    const { maxCharLength, ...rest } = this.props;
    if (!!maxCharLength) {
      rest.maxCharLength = maxCharLength;
    }
    return (
      <View style={[styles.container]}>
        <TextInput
          multiline
          {...rest}
          style={{ margin: 16, height: "90%", backgroundColor: "transparent" }}
          onChangeText={this.onChangeText}
        />
        {this.renderCharCount()}
      </View>
    );
  }
}

TextArea.propTypes = {
  count: PropTypes.number,
  maxCharLength: PropTypes.number
};

TextArea.defaultProps = {
  count: 0,
  maxCharLength: 200
};
