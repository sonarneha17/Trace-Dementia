import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Questionnaire from './TestPages/Questionnaire';
import LabTestPage from './TestPages/LabTestPage';
import MriPage from './TestPages/MriPage';
import Testoption from './TestPages/Testoption';

const Stack = createStackNavigator();
const MyStack1 = () => {
   return (
      <NavigationContainer  independent={true}>
      <Stack.Navigator
            screenOptions={{
               headerTitleAlign: 'center',
               headerStyle: {
                 backgroundColor: 'thistle',
               },
               headerTintColor: '#fff',
             }}>
	  <Stack.Screen 
         name="Testoption" 
         component={Testoption} 
         options={{ title: 'Testoption', headerLeft: null }} />

      <Stack.Screen 
         name="Questionnaire" 
         component={Questionnaire} 
         options={{ title: 'Questionnaire' }} />

      <Stack.Screen  
         name="LabTestPage" 
         component={LabTestPage} />

      <Stack.Screen  
         name="MriPage" 
         component={MriPage} />
	  
      </Stack.Navigator>
      </NavigationContainer>
   );
};
export default MyStack1;








