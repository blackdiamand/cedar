import {createContext, useState} from "react";
export const questionContext = createContext({
  question : "Who is the President?",
  answer : "Joe Biden",
  answers : ["Joe Biden", "Barack Obama", "Donald Trump"]

});