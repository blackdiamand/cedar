import {useContext} from "react";
import {GlobalContext, QuestionContext} from "../Contexts";
import {Button, Image, Text, View} from "react-native";
import QuestionButtons from "./QuestionButtons";
import {questionBank} from "../naturalization_test_bank";
import * as React from "react";

function Dashboard({ navigation}) {
  const {questionContext, setQuestionContext} = useContext(QuestionContext);
  const {pointsContext, setPointsContext} = useContext(GlobalContext);
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <Image
        style={{ alignSelf: 'center' }}
        source={require('../assets/whitehouse.png')}
      />
      <Button
        title="All Questions"
        onPress={() => navigation.navigate('Questions')}
      />
      {pointsContext.wrongAnswers.length > 0 &&
        <Button
          title="Review Wrong Questions"
          onPress={() => navigation.navigate('Wrong Questions')}
        />}
    </View>
  );
}

export default Dashboard;