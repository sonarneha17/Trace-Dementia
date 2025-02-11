
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, Component} from 'react';
import firebase from '../database/firebase';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import DoctorProfile from "./screens/DoctorProfile";
import SecondPage from "./screens/SecondPage";



const ActionBarImage = ({isIcon, menuText, textStyle, route, navigation}) => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState("");

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const Stack1 = createStackNavigator();
 
  const clearUserData = () => ({
    type: 'CLEAR_USER_DATA',
  });

  return (
    <View style={{ flexDirection: 'row' }}>
        <Menu
        visible={visible}
        anchor={isIcon ? (
          <TouchableOpacity onPress={showMenu}>
            <Image
                source={require('../assets/doctor.png')}
                  
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  marginLeft: 15,
                }}
              />
          </TouchableOpacity>
        ) : (
          <Text
            onPress={showMenu}
            style={textStyle}>
            {menuText}
          </Text>
        )}
        onRequestClose={hideMenu}
      >

        <MenuItem
        onPress={() => { 
          navigation.navigate('DoctorProfile');
          hideMenu();
        }}
        >
          Profile
        </MenuItem>
        
        <MenuItem
        onPress={ async () => { 
          try {
              
              await firebase.auth().signOut();
              navigation.navigate('login');
        } catch (e) {
            console.log(e);
        }
        }}
        >Logout</MenuItem>

        <MenuDivider />
      </Menu>
    </View>
  );
};


export default  ActionBarImage;
