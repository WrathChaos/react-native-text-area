<img alt="React Native Text Area" src="https://github.com/WrathChaos/react-native-text-area/blob/master/assets/logo.png" width="1050"/>

Simple and easy to use TextArea for React Native.

[![npm version](https://img.shields.io/npm/v/react-native-text-area.svg)](https://www.npmjs.com/package/react-native-text-area)
[![npm](https://img.shields.io/npm/dt/react-native-text-area.svg)](https://www.npmjs.com/package/react-native-text-area)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Text Area" src="assets/Screenshots/example.gif" width="49.7%" />
</p>

## Installation

Add the dependency:

### React Native:

```js
npm i @freakycoder/react-native-text-area
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
```

## Basic Usage

```js
import TextArea from "react-native-text-area";

<TextArea
  maxCharLimit={50}
  placeholderTextColor="black"
  exceedCharCountColor="#990606"
  placeholder={"Write your review..."}
/>;
```

## Configuration - Props

| Property             |  Type  |    Default     | Description                               |
| -------------------- | :----: | :------------: | ----------------------------------------- |
| styles               | style  | check the code | set your own style                        |
| backgroundColor      | color  |   "#fbfbfb"    | change the TextArea's background color    |
| charCount            | number |       0        | set the current character count           |
| maxCharLimit         | number |      200       | set the maximum character count limit     |
| charCountColor       | color  |     "#ccc"     | change character count's color            |
| exceedCharCountColor | color  |     "red"      | change the exceeded character count color |

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Text Area Library is available under the MIT license. See the LICENSE file for more info.
