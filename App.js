import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./Components/Home";
import QuestionScreen from "./Components/Question";
import {createContext, useState} from "react";
import {GlobalContext, QuestionContext} from "./Contexts";
import {questionBank} from "./naturalization_test_bank";
import WrongQuestion from "./Components/WrongQuestion";
import Dashboard from "./Components/Dashboard";

const Stack = createNativeStackNavigator();

const App = () => {

  const [pointsContext, setPointsContext] = useState({score:0, wrongAnswers : [], bankState: "all", hint: ""});
  const [questionContext, setQuestionContext] = useState(questionBank[Math.floor(Math.random() * 200)]);

  return (
    <QuestionContext.Provider value={{questionContext:questionContext, setQuestionContext:setQuestionContext}}>
      <GlobalContext.Provider value={{pointsContext:pointsContext, setPointsContext:setPointsContext}}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            contentStyle:{
              backgroundColor:'#FBF9F1'
            }
          }}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Questions" component={QuestionScreen} />
            <Stack.Screen name="Wrong Questions" component={WrongQuestion} />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalContext.Provider>
    </QuestionContext.Provider>
  );
}

export default App;