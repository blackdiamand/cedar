import {useContext} from "react";
import {GlobalContext, QuestionContext} from "../Contexts";
import {View} from "react-native";
import {Input, Button} from 'react-native-elements';
import * as React from "react";

function QuestionButtons({question, newQuestion}){
  const {pointsContext, setPointsContext} = useContext(GlobalContext);
  const {questionContext, setQuestionContext} = useContext(QuestionContext);
  const answersArray = question['incorrect_answers'];
  if (answersArray.length <= 3) {
    answersArray.splice(Math.floor(Math.random() * (question['incorrect_answers'].length + 1)), 0, question['correct_answer']);
  }
  function onCorrectAnswer(){

    let obj = pointsContext;
    obj.score = obj.score + 1;
    obj.hint = "";
    setPointsContext(obj);
    setQuestionContext(newQuestion);
  }
  function onWrongAnswer(){
    let obj = pointsContext;
    obj.wrongAnswers.push(question);
    setPointsContext(obj);
  }
  return (
    <View style = {{width: "80%", justifyContent: 'center', flex:1}}>
      {answersArray.map(answer =>
        <View style={{padding:10}} key={answer}>
          <Button
            style={{padding: 10}}
            titleStyle={{
              fontSize: 20,
            }}
            title={answer}
            onPress={() => answer === question['correct_answer'] ? onCorrectAnswer(): onWrongAnswer()}
          />
        </View>
      )}
    </View>
  );
}
export default QuestionButtons;