import {useContext} from "react";
import {GlobalContext, QuestionContext} from "../Contexts";
import {Button, Image, Text, View} from "react-native";
import QuestionButtons from "./QuestionButtons";
import {questionBank} from "../naturalization_test_bank";
import * as React from "react";

function Dashboard({ navigation}) {
  const {questionContext, setQuestionContext} = useContext(QuestionContext);
  const {pointsContext, setPointsContext} = useContext(GlobalContext);
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <Image
        style={{ alignSelf: 'center' }}
        source={require('../assets/whitehouse.png')}
      />
      <Button
        title="All Questions"
        onPress={() => {
            let obj = pointsContext;
            obj.bankState = "all";
            setPointsContext(obj);
            navigation.navigate('Questions')}}
      />
      <Button
        title="Principles of American Democracy"
        onPress={() => {
          let obj = pointsContext;
          obj.bankState = "Principles";
          setPointsContext(obj);
          navigation.navigate('Questions')}}
      />
      <Button
        title="System of Government"
        onPress={() => {
          let obj = pointsContext;
          obj.bankState = "System of Government";
          setPointsContext(obj);
          navigation.navigate('Questions')}}
      />
      <Button
        title="Rights and Responsibilities"
        onPress={() => {
          let obj = pointsContext;
          obj.bankState = "Rights and Responsibilities";
          setPointsContext(obj);
          navigation.navigate('Questions')}}
      />
      <Button
        title="Colonial Period History"
        onPress={() => {
          let obj = pointsContext;
          obj.bankState = "Colonial Period History";
          setPointsContext(obj);
          navigation.navigate('Questions')}}
      />
      <Button
        title="History"
        onPress={() => {
          let obj = pointsContext;
          obj.bankState = "History";
          setPointsContext(obj);
          navigation.navigate('Questions')}}
      />
      <Button
        title="Geography"
        onPress={() => {
          let obj = pointsContext;
          obj.bankState = "Geography";
          setPointsContext(obj);
          navigation.navigate('Questions')}}
      />
      <Button
        title="Holidays"
        onPress={() => {
          let obj = pointsContext;
          obj.bankState = "Holidays";
          setPointsContext(obj);
          navigation.navigate('Questions')}}
      />
      {pointsContext.wrongAnswers.length > 0 &&
        <Button
          title="Review Wrong Questions"
          onPress={() => navigation.navigate('Wrong Questions')}
        />}
    </View>
  );
}

export default Dashboard;