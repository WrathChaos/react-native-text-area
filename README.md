<img alt="React Native Text Area" src="https://github.com/WrathChaos/react-native-text-area/blob/master/assets/logo.png" width="1050"/>

[![Simple and easy to use TextArea for React Native](https://img.shields.io/badge/-Simple%20and%20easy%20to%20use%20TextArea%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-dynamic-search-bar)

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-text-area.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-text-area)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-text-area.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-text-area)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Text Area" src="assets/Screenshots/example.gif" width="49.7%" />
</p>

## Installation

Add the dependency:

### React Native

```js
npm i @freakycoder/react-native-text-area
```

## Peer Dependencies

###### IMPORTANT! You need install them

<i>Zero Dependency</i>

## Basic Usage

```jsx
import RNTextArea from "@freakycoder/react-native-text-area";

<RNTextArea
  maxCharLimit={50}
  placeholderTextColor="black"
  exceedCharCountColor="#990606"
  placeholder={"Write your review..."}
  onChangeText={(text: string) => console.log("Text: ", text)}
/>;
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

## Configuration - Props

| Property             |  Type  | Default | Description                               |
| -------------------- | :----: | :-----: | ----------------------------------------- |
| style                | style  | default | set your own style                        |
| charCount            | number |    0    | set the current character count           |
| maxCharLimit         | number |   200   | set the maximum character count limit     |
| charCountColor       | color  | "#ccc"  | change character count's color            |
| exceedCharCountColor | color  |  "red"  | change the exceeded character count color |
| defaultCharCount     | number |    0    | set the default char count other than 0   |

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Text Area Library is available under the MIT license. See the LICENSE file for more info.
