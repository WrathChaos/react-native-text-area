import React, { Fragment } from "react";
import { SafeAreaView } from "react-native";

import TextArea from "@freakycoder/react-native-text-area";

const App = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <TextArea
          maxCharLimit={50}
          placeholderTextColor="black"
          exceedCharCountColor="#990606"
          placeholder={"Write your review..."}
        />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
