import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./Components/Home";
import QuestionScreen from "./Components/Question";
import {createContext, useState} from "react";
import {PointsContext} from "./Contexts";

const Stack = createNativeStackNavigator();

const App = () => {

  const [context, setContext] = useState(0);

  return (
      <PointsContext.Provider value={{context:context, setContext:setContext}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Cedar" component={HomeScreen} />
            <Stack.Screen name="Questions" component={QuestionScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PointsContext.Provider>
  );
}

export default App;