import {Button, Text, View} from "react-native";
import * as React from "react"
import {useContext} from "react";
import {QuestionContext, GlobalContext} from "../Contexts";
import {questionBank} from "../naturalization_test_bank";
import QuestionButtons from "./QuestionButtons";
import ConfettiCannon from 'react-native-confetti-cannon';


function QuestionScreen({ navigation}) {
  const {questionContext, setQuestionContext} = useContext(QuestionContext);
  const {pointsContext, setPointsContext} = useContext(GlobalContext);
  let questionBankState = pointsContext.bankState;
  function bank() {
    if (questionBankState === "all") {
      return questionBank[Math.floor(Math.random() * 200)];
    }
    const map = new Map([["Principles" , "A: Principles of American Democracy"],
      ["System of Government", "B: System of Government"], ["Rights and Responsibilities", "C: Rights and Responsibilities"],
    ["Colonial Period History", "A: Colonial Period and Independence (American History)"], ["History", "Recent American History and Other Important Historical Information"],
      ["Geography", "Geography"], ["Holidays", "Holidays"]]);

    if (map.has(questionBankState)){
      let newBank = questionBank.filter((question) => question['category'] === map.get(questionBankState));
      return newBank[Math.floor(Math.random() * newBank.length)];
      //return questionBank[Math.floor(Math.random() * 200)];
    }
    else{
      return questionBank[Math.floor(Math.random() * 200)];
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%"}}>
      <Text style={{fontSize:30}}>Question: {questionContext['question']} </Text>
      <QuestionButtons question={questionContext} newQuestion = {bank()} />
      <Text style={{fontSize:25}}>Points: {pointsContext.score}</Text>
      {pointsContext.score > 0 && pointsContext.score % 10 === 0 && <ConfettiCannon count={200} origin={{x: -10, y: 0}} fadeOut={true}/>}
    </View>
  );
}

export default QuestionScreen;