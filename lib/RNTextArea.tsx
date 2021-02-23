import * as React from "react";
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
/**
 * ? Local Imports
 */
import styles, { _charCountStyle } from "./RNTextArea.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface IRNTextInputProps extends TextInputProps {
  style?: CustomStyleProp;
  textInputStyle?: CustomTextStyleProp;
  defaultCharCount?: number;
  maxCharLimit?: number;
  charCountColor?: string;
  exceedCharCountColor?: string;
  onChangeText: (text: string) => void;
}

const RNTextInput: React.FC<IRNTextInputProps> = ({
  style,
  textInputStyle,
  maxCharLimit = 200,
  defaultCharCount = 0,
  charCountColor = "#ccc",
  exceedCharCountColor = "red",
  onChangeText,
  ...rest
}) => {
  const [charCount, setCharCount] = React.useState(defaultCharCount || 0);

  const handleChangeText = (text: string) => {
    setCharCount(text.length);
    if (onChangeText) onChangeText(text);
  };

  const renderCharCount = () => {
    if (!maxCharLimit) return null;

    return (
      <Text
        style={_charCountStyle(
          charCount > maxCharLimit ? exceedCharCountColor : charCountColor,
        )}
      >{`${charCount}/${maxCharLimit}`}</Text>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        multiline
        {...rest}
        style={[styles.textInputStyle, textInputStyle]}
        onChangeText={handleChangeText}
      />
      {renderCharCount()}
    </View>
  );
};

export default RNTextInput;
