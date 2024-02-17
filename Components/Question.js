import {Button, Text, View} from "react-native";
import * as React from "react"
import {useContext} from "react";
import {questionContext, pointsContext} from "../Contexts";

//json object -> buttons
function buttons(question){
  const points = useContext(questionContext);
  return (
    <>
      {question.answers.map(answer =>
        <Button
          key={answer}
          title={answer}
          //onPress={() => incrementScore(answer)}
        />
      )}
    </>
  );
}

function QuestionScreen({ navigation}) {
  const question = useContext(questionContext);
  console.log(question);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Question: {question.question} </Text>
      {buttons(question)}
    </View>
  );
}

export default QuestionScreen;