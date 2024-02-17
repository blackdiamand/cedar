import {Button, Text, View} from "react-native";
import * as React from "react"
import {useContext} from "react";
import {questionContext, PointsContext} from "../Contexts";

//json object -> buttons
function buttons(question){
  const {context, setContext} = useContext(PointsContext);
  const answersArray = question['incorrect_answers'];
  if (answersArray.length <= 3) {
    answersArray.splice(Math.floor(Math.random() * (question['incorrect_answers'].length + 1)), 0, question['correct_answer']);
  }
  return (
    <>
      {answersArray.map(answer =>
        <Button
          key={answer}
          title={answer}
          onPress={() => answer === question['correct_answer'] ? setContext(context + 1): ""}
        />
      )}
    </>
  );
}

function QuestionScreen({ navigation}) {
  const question = useContext(questionContext);
  const {context, setContext} = useContext(PointsContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Question: {question['question']} </Text>
      {buttons(question)}
      <Text>Points: {context}</Text>
    </View>
  );
}

export default QuestionScreen;