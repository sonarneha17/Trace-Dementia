import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddPage from '../LabTestPages/AddPage';
import ViewPage from '../LabTestPages/ViewPage';



const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
   <NavigationContainer independent={true}>
    <Tab.Navigator
      initialRouteName="AddPage"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { backgroundColor: 'darkmagenta' },
      }}
    >
      <Tab.Screen
        name="AddPage"
        component={AddPage}
        options={{ title: 'Add/Edit Score' }}
      />
      <Tab.Screen
        name="ViewPage"
        component={ViewPage}
        options={{ title: 'View Result' }}
      />

    </Tab.Navigator>
    </NavigationContainer>

  );
}
export default MyTabs;
