import {Button, Text, View} from "react-native";
import * as React from "react"
import {useContext} from "react";
import {questionContext} from "../Contexts";

//json object -> buttons
function buttons(question){
  for (let answer in question.answers){
    
  }
  return (
    <>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Questions')}
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Questions')}
      />
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