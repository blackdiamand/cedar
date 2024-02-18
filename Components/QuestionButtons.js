import {useContext} from "react";
import {GlobalContext, QuestionContext} from "../Contexts";
import {Button} from "react-native";
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
    setPointsContext(obj);
    setQuestionContext(newQuestion);
  }
  function onWrongAnswer(){
    let obj = pointsContext;
    obj.wrongAnswers.push(question);
    setPointsContext(obj);
  }
  return (
    <>
      {answersArray.map(answer =>
        <Button
          key={answer}
          title={answer}
          onPress={() => answer === question['correct_answer'] ? onCorrectAnswer(): onWrongAnswer()}
        />
      )}
    </>
  );
}
export default QuestionButtons;