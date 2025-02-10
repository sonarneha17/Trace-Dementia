// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';

import ActionBarImage from './components/ActionBarImage';
import DoctorProfile from './components/screens/DoctorProfile';
import login from './components/login'




const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'darkmagenta',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup'}}
      />     

      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ title: 'Login'}}
      /> 

      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options=
       {({route, navigation}) => ({ title: 'TraceDementia', 
       headerLeft: null,
       headerTitleAlign: 'right',
       headerLeft: () => (
        <Image
        source={ require('./assets/dementia(bg).png')}
        style={{
          width: 50,
          height: 50,
          borderRadius: 30,
          }}
          />  
      ),
       headerRight: () => (
        <ActionBarImage
          menuText="Menu"
          textStyle={{color: 'white'}}
          navigation={navigation}
          route={route}
          isIcon={true}
        />
      ),
       })}   
      />
        <Stack.Screen 
        name="DoctorProfile" 
        component={DoctorProfile} 
        options={{ title: 'DoctorProfile'}}
      />

      <Stack.Screen 
        name="login" 
        component={login} 
        options={{ title: 'Login'}}
      />
    </Stack.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
}
