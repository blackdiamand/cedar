import {Button, Text, View} from "react-native";
import * as React from "react"
import {useContext} from "react";
import {questionContext, PointsContext} from "../Contexts";

//json object -> buttons
function buttons(question){
  const {context, setContext} = useContext(PointsContext);
  return (
    <>
      {question.answers.map(answer =>
        <Button
          key={answer}
          title={answer}
          onPress={() => answer === question.answer ? setContext(context + 1): ""}
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
      <Text>Question: {question.question} </Text>
      {buttons(question)}
      <Text>Points: {context}</Text>
    </View>
  );
}

export default QuestionScreen;