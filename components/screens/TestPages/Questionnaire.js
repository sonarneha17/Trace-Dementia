import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import QuestionnaireHomeScreen from '../QuestionnairePages/QuestionnaireHomeScreen';
import QuestionnaireQuizScreen from '../QuestionnairePages/QuestionnaireQuizScreen';
import QuestionnaireResultsScreen from '../QuestionnairePages/QuestionnaireResultsScreen';
import GridQuiz from '../QuestionnairePages/GridQuiz';
import GridQuizLast from '../QuestionnairePages/GridQuizLast';
import MatchPattern from '../QuestionnairePages/MatchPattern';
import MatchPatternLast from '../QuestionnairePages/MatchPatternLast';
import RemembranceQuiz from '../QuestionnairePages/RemembranceQuiz';
import RemembranceQuizLast from '../QuestionnairePages/RemembranceQuizLast';
import ShapeQuiz from '../QuestionnairePages/ShapeQuiz';
import ShapeQuizLast from '../QuestionnairePages/ShapeQuizLast';

const Questionnaire = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer independent ={true}>
      <Stack.Navigator independent ={true}>
        <Stack.Screen name="QuestionnaireHomeScreen" component={QuestionnaireHomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="QuestionnaireQuizScreen" component={QuestionnaireQuizScreen} options={{headerShown:false}}/>
        <Stack.Screen name="QuestionnaireResultsScreen" component={QuestionnaireResultsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="GridQuiz" component={GridQuiz} options={{headerShown:false}}/>
        <Stack.Screen name="GridQuizLast" component={GridQuizLast} options={{headerShown:false}}/>
        <Stack.Screen name="MatchPattern" component={MatchPattern} options={{headerShown:false}}/>
        <Stack.Screen name="MatchPatternLast" component={MatchPatternLast} options={{headerShown:false}}/>
        <Stack.Screen name="RemembranceQuiz" component={RemembranceQuiz} options={{headerShown:false}}/>
        <Stack.Screen name="RemembranceQuizLast" component={RemembranceQuizLast} options={{headerShown:false}}/>
        <Stack.Screen name="ShapeQuiz" component={ShapeQuiz} options={{headerShown:false}}/>
        <Stack.Screen name="ShapeQuizLast" component={ShapeQuizLast} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Questionnaire

const styles = StyleSheet.create({})