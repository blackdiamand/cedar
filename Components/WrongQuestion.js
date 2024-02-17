import {Button, Text, View} from "react-native";
import * as React from "react"
import {useContext} from "react";
import {QuestionContext, GlobalContext} from "../Contexts";
import {questionBank} from "../naturalization_test_bank";
import QuestionButtons from "./QuestionButtons";


function WrongQuestion({ navigation}) {
  const {questionContext, setQuestionContext} = useContext(QuestionContext);
  const {pointsContext, setPointsContext} = useContext(GlobalContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Question: {questionContext['question']} </Text>
      <QuestionButtons question={questionContext} newQuestion = {pointsContext.wrongAnswers[Math.floor(Math.random() * pointsContext.wrongAnswers.length)]} />
      <Text>Points: {pointsContext.score}</Text>
    </View>
  );
}

export default WrongQuestion;