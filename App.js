import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./Components/Home";
import QuestionScreen from "./Components/Question";
import {createContext, useState} from "react";
import {PointsContext, QuestionContext} from "./Contexts";
import AIQuestionScreen from "./Components/AIQuestion";
import {questionBank} from "./naturalization_test_bank";

const Stack = createNativeStackNavigator();

const App = () => {

  const [pointsContext, setPointsContext] = useState(0);
  const [questionContext, setQuestionContext] = useState(questionBank[Math.floor(Math.random() * 200)]);

  return (
    <QuestionContext.Provider value={{questionContext:questionContext, setQuestionContext:setQuestionContext}}>
      <PointsContext.Provider value={{pointsContext:pointsContext, setPointsContext:setPointsContext}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Cedar" component={HomeScreen} />
            <Stack.Screen name="Questions" component={QuestionScreen} />
            <Stack.Screen name="AI Questions" component={AIQuestionScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PointsContext.Provider>
    </QuestionContext.Provider>
  );
}

export default App;