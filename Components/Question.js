import {Button, Text, View} from "react-native";
import * as React from "react"
import {useContext} from "react";
import {QuestionContext, PointsContext} from "../Contexts";
import {questionBank} from "../naturalization_test_bank";

//json object -> buttons
function buttons(question){
  const {pointsContext, setPointsContext} = useContext(PointsContext);
  const {questionContext, setQuestionContext} = useContext(QuestionContext);
  const answersArray = question['incorrect_answers'];
  if (answersArray.length <= 3) {
    answersArray.splice(Math.floor(Math.random() * (question['incorrect_answers'].length + 1)), 0, question['correct_answer']);
  }
  function onCorrectAnswer(){
    setPointsContext(pointsContext + 1);
    setQuestionContext(questionBank[Math.floor(Math.random() * 200)]);
  }
  return (
    <>
      {answersArray.map(answer =>
        <Button
          key={answer}
          title={answer}
          onPress={() => answer === question['correct_answer'] ? onCorrectAnswer(): ""}
        />
      )}
    </>
  );
}

function QuestionScreen({ navigation}) {
  const {questionContext, setQuestionContext} = useContext(QuestionContext);
  const {pointsContext, setPointsContext} = useContext(PointsContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Question: {questionContext['question']} </Text>
      {buttons(questionContext)}
      <Text>Points: {pointsContext}</Text>
    </View>
  );
}

export default QuestionScreen;