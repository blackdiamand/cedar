import {useContext} from "react";
import {GlobalContext, QuestionContext} from "../Contexts";
import {Image, Text, View} from "react-native";
import {Button} from 'react-native-elements';
import QuestionButtons from "./QuestionButtons";
import {questionBank} from "../naturalization_test_bank";
import * as React from "react";

function Dashboard({ navigation}) {
  const {questionContext, setQuestionContext} = useContext(QuestionContext);
  const {pointsContext, setPointsContext} = useContext(GlobalContext);
  return (
    <View style={{ flex: 1}}>
      <Image
        style={{ alignSelf: 'center' }}
        source={require('../assets/whitehouse.png')}
      />
      <View style={{padding:10}}>
        <Button
          titleStyle={{
              fontSize: 15,
          }}
          title="All Questions"
          onPress={() => {
              let obj = pointsContext;
              obj.bankState = "all";
              setPointsContext(obj);
              navigation.navigate('Questions')}}
        />
      </View>
      <View style={{padding:10}}>
        <Button
          titleStyle={{
              fontSize: 15,
          }}
          title="Principles of American Democracy"
          onPress={() => {
            let obj = pointsContext;
            obj.bankState = "Principles";
            setPointsContext(obj);
            navigation.navigate('Questions')}}
        />
      </View>
      <View style={{padding:10}}>
        <Button
          titleStyle={{
              fontSize: 15,
          }}
          title="System of Government"
          onPress={() => {
            let obj = pointsContext;
            obj.bankState = "System of Government";
            setPointsContext(obj);
            navigation.navigate('Questions')}}
        />
      </View>
      <View style={{padding:10}}>
        <Button
          titleStyle={{
              fontSize: 15,
          }}
          title="Rights and Responsibilities"
          onPress={() => {
            let obj = pointsContext;
            obj.bankState = "Rights and Responsibilities";
            setPointsContext(obj);
            navigation.navigate('Questions')}}
        />
      </View>
      <View style={{padding:10}}>
        <Button
          titleStyle={{
              fontSize: 15,
          }}
          title="Colonial Period History"
          onPress={() => {
            let obj = pointsContext;
            obj.bankState = "Colonial Period History";
            setPointsContext(obj);
            navigation.navigate('Questions')}}
        />
      </View>
      <View style={{padding:10}}>
        <Button
          titleStyle={{
              fontSize: 15,
          }}
          title="History"
          onPress={() => {
            let obj = pointsContext;
            obj.bankState = "History";
            setPointsContext(obj);
            navigation.navigate('Questions')}}
        />
      </View>
      <View style={{padding:10}}>
        <Button
          titleStyle={{
              fontSize: 15,
          }}
          title="Geography"
          onPress={() => {
            let obj = pointsContext;
            obj.bankState = "Geography";
            setPointsContext(obj);
            navigation.navigate('Questions')}}
        />
      </View>
      <View style={{padding:10}}>
        <Button
          titleStyle={{
              fontSize: 15,
          }}
          title="Holidays"
          onPress={() => {
            let obj = pointsContext;
            obj.bankState = "Holidays";
            setPointsContext(obj);
            navigation.navigate('Questions')}}
        />
      </View>
      <View style={{padding:10}}>
        {pointsContext.wrongAnswers.length > 0 &&
          <Button
            titleStyle={{
                fontSize: 15,
            }}
            title="Review Wrong Questions"
            onPress={() => navigation.navigate('Wrong Questions')}
          />}
      </View>
    </View>
  );
}

export default Dashboard;