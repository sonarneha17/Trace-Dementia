import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PatientHomePage from './PatientPages/PatientHomePage';
import AddPatient from './PatientPages/AddPatient';
import UpdatePatient from './PatientPages/UpdatePatient';
import DeletePatient from './PatientPages/DeletePatient';
import SearchPatient from './PatientPages/SearchPatient';


const Stack = createStackNavigator();
const MyStack1 = () => {
   return (
      <NavigationContainer  independent={true}>
      <Stack.Navigator
      initialRouteName="PatientHomePage"
            screenOptions={{
               headerTitleAlign: 'center',
               headerStyle: {
                 backgroundColor: 'thistle',
               },
               headerTintColor: '#fff',
             }}>
	  <Stack.Screen 
         name="PatientHomePage" 
         component={PatientHomePage} 
         options={{ title: 'PatientHomePage', headerLeft: null }} />

      <Stack.Screen 
         name="AddPatient" 
         component={AddPatient} 
         options={{ title: 'AddPatient' }} />

      <Stack.Screen  
         name="SearchPatient" 
         component={SearchPatient} 
		 options={{ title: 'SearchPatient' }}/>

	<Stack.Screen  
         name="UpdatePatient" 
         component={UpdatePatient} 
		 options={{ title: 'Update Patient' }}/>

      <Stack.Screen  
         name="DeletePatient" 
         component={DeletePatient}
		 options={{ title: 'Delete Patient' }} />
	  
      </Stack.Navigator>
      </NavigationContainer>
   );
};
export default MyStack1;








