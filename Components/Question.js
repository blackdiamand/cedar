import {Button, Text, View, TextInput, StyleSheet} from "react-native";
import * as React from "react"
import {useState, useContext} from "react";
import {QuestionContext, GlobalContext} from "../Contexts";
import {questionBank} from "../naturalization_test_bank";
import QuestionButtons from "./QuestionButtons";
import ConfettiCannon from 'react-native-confetti-cannon';


function QuestionScreen({ navigation}) {


  const system_message = "You are a tutor helping non-native senior citizens prepare for the U.S. naturalization test. You will receive 3 forms of input: 1. A question from the naturalization test; 2. Four multiple choice answers to that question (where 3 are incorrect and 1 is correct; 3. The user's answer choice, which is either one of the four answers (A, B, C, or D) or NONE If the user's answer is correct given the question, congratulate them, explain why they are correct, and provide a few encouraging words. If the user's answer is incorrect given the question, politely express that they are not correct, provide a hint, and ask the user to try again. The hint should not be too obvious. If the user's answer is NONE, provide a not too obvious hint that will help them arrive at the answer, and DO NOT give them the correct answer. The user may then enter into a dialogue with you, asking you questions. You should answer their questions to guide them towards the right answer, without explicitly giving it to them. When mentioning the correct answer, do not give the letter of the correct answer, since the ordering of the questions could be different than the ordering given to you. Adjust the session based on their responses and offer encouragement. Keep responses limited to 25 words maximum."

  const [userInput, setUserInput] = useState('');
  const [hint, setHint] = useState('');


  const {questionContext, setQuestionContext} = useContext(QuestionContext);
  const {pointsContext, setPointsContext} = useContext(GlobalContext);
  let questionBankState = pointsContext.bankState;

  const handleUserInputChange = (text) => {
    setUserInput(text);
  };

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

  const handleSubmit = async () => {
    const currentQuestion = questionContext.question;
    const correctAnswer = questionContext.correct_answer;
    const incorrectAnswers = questionContext.incorrect_answers;
    const gptPrompt = `
    Question: ${currentQuestion}
    1) ${correctAnswer} (Correct Answer)
    2) ${incorrectAnswers[0]}
    3) ${incorrectAnswers[1]}
    4) ${incorrectAnswers[2]}
    Your answer: ${userInput || 'NONE'}
  `;
    //console.log(process.env.REACT_APP_API_KEY);

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
          {"role": "system", "content": system_message},
          {"role": "user", "content": gptPrompt},
        ],
        }),
      }).then((response) => console.log(response.json().then((c) => {
        setHint(c.choices[0].message.content);
        console.log(c.choices[0].message.content);
        let obj = pointsContext;
        obj.hint = c.choices[0].message.content;
        setPointsContext(obj);
        }
      )));
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%"}}>
      <Text style={{fontSize:30}}>Question: {questionContext['question']} </Text>
      <TextInput
        onChangeText={text => setUserInput(text)}
        value={userInput}
        placeholder="What's your question?"
      />
      <Button
        title="Hint"
        onPress={handleSubmit}
      />
      {pointsContext.hint !== "" && <Text>{hint}</Text>}
      <QuestionButtons question={questionContext} newQuestion = {bank()} />
      <Text style={{fontSize:25}}>Points: {pointsContext.score}</Text>
      {pointsContext.score > 0 && pointsContext.score % 10 === 0 && <ConfettiCannon count={200} origin={{x: -10, y: 0}} fadeOut={true}/>}
    </View>
  );
}

export default QuestionScreen;