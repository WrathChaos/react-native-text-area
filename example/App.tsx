import React from "react";
import { SafeAreaView, View } from "react-native";
import RNTextArea from "@freakycoder/react-native-text-area";

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 24,
          borderRadius: 12,
          shadowRadius: 8,
          shadowOpacity: 0.2,
          shadowColor: "#757575",
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
      >
        <RNTextArea
          maxCharLimit={50}
          style={{ height: 350, borderRadius: 12 }}
          defaultCharCount={100}
          placeholderTextColor="black"
          exceedCharCountColor="#990606"
          placeholder={"Write your review..."}
          onChangeText={(text: string) => console.log("Text: ", text)}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
