import {Button, Text, View} from "react-native";
import * as React from "react"
import {useContext} from "react";
import {QuestionContext, GlobalContext} from "../Contexts";

//json object -> buttons
function buttons(question){
  const {context, setContext} = useContext(GlobalContext);
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

function AIQuestionScreen({ navigation}) {
  const question = useContext(QuestionContext);
  const {context, setContext} = useContext(GlobalContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Question: {question.question} </Text>
      {buttons(question)}
      <Text>Points: {context}</Text>
    </View>
  );
}

export default AIQuestionScreen;