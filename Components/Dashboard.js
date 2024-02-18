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
        onPress={() => {
            let obj = pointsContext;
            obj.bankState = "all";
            setPointsContext(obj);
            navigation.navigate('Questions')}}
      />
      <Button
        title="Principles of American Democracy"
        onPress={() => {
          let obj = pointsContext;
          obj.bankState = "Principles";
          setPointsContext(obj);
          navigation.navigate('Questions')}}
      />
      <Button
        title="System of Government"
        onPress={() => navigation.navigate('System of Government')}
      />
      <Button
        title="Rights and Responsibilities"
        onPress={() => navigation.navigate('Rights and Responsibilities')}
      />
      <Button
        title="Colonial Period History"
        onPress={() => navigation.navigate('Colonial Period History')}
      />
      <Button
        title="History"
        onPress={() => navigation.navigate('History')}
      />
      <Button
        title="Geography"
        onPress={() => navigation.navigate('Geography')}
      />
      <Button
        title="Holidays"
        onPress={() => navigation.navigate('Holidays')}
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