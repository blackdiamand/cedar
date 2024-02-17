import {createContext, useState} from "react";
import {questionBank} from "./naturalization_test_bank";

export const QuestionContext = createContext(questionBank[Math.floor(Math.random() * 200)]);

export const PointsContext = createContext(0);