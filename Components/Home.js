import {Button, Text, View} from "react-native";
import * as React from "react";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to The App!</Text>
      <Button
        title="Start Questions"
        onPress={() => navigation.navigate('Questions')}
      />
    </View>
  );
}

export default HomeScreen;