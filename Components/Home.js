import {Button, Text, View} from "react-native";
import * as React from "react";
import {useContext} from "react";
import {GlobalContext} from "../Contexts";

function HomeScreen({ navigation }) {
  const {pointsContext, setPointsContext} = useContext(GlobalContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to The Civics App!</Text>
      <Button
        title="Start Questions"
        onPress={() => navigation.navigate('Questions')}
      />
      {pointsContext.wrongAnswers.length > 0 &&
        <Button
        title="Wrong Questions"
        onPress={() => navigation.navigate('Wrong Questions')}
      />}
    </View>
  );
}

export default HomeScreen;