import React from "react";
import { Text, View, StatusBar, Image, StyleSheet,Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import firebase from '../../database/firebase';
import GestureFlipView from './gestureFlipView';

const App = () => {


	return (
	  <>
		<StatusBar barStyle="dark-content" />
		<View style={styles.container}>
		  <GestureFlipView width={300} height={500}>
			{renderFront()}
			{renderBack()}
			
		  </GestureFlipView>
		</View>
	  </>
	);
  };
  
  const renderFront = () => {
	return (
		<View style={styles.frontStyle}>
			<Image
        source={ require('./../../assets/dementia(bg).png')}
        style={{
          width: 190,
          height: 190,
          borderRadius: 30,
          }}/>
		<Text style={{fontSize: 15, color: 'white',textAlign:"center"}}>{firebase.auth().currentUser.email}</Text>
		<Text style={{fontSize: 25, color: 'white',textAlign:"center"}}>{'Welcome to '}</Text>
		<Text style={{fontSize: 30, color: 'white',textAlign:"center", fontWeight:'bold'}}>{' TraceDementia'}</Text>
		<Text style={{fontSize: 15, color: 'white',textAlign:"center"}}>{'\n\n\n\n\n\nFlip the card to see'}</Text>
		<Text style={{fontSize: 15, color: 'white',textAlign:"center"}}>{'The standard scorecard'}</Text>
	  </View>
	  		

	);
  };
  
  const renderBack = () => {
	return (
	  <View style={styles.backStyle}>
		<Text style={{fontSize: 25, color: '#fff',marginTop:20,fontWeight:'bold'}}>{' MMSE scorecard'}</Text>
		<Text style={{fontSize: 15, color: '#fff',marginTop:15,fontWeight:'bold'}}> Score 		                        Severity level</Text>
		<Text style={{color: '#fff',marginTop:15}}> 24 above		                  No Cognitive Impairment</Text>
		<Text style={{color: '#fff'}}> between 18 to 23     Mild Cognitive Impairment</Text>
		<Text style={{color: '#fff'}}> below 18                  Severe Cognitive Impairment</Text>


		<Text style={{fontSize: 25, color: '#fff',marginTop:20,fontWeight:'bold'}}>{' \n LAB TEST'}</Text>
		<Text style={{fontSize: 15, color: '#fff',marginTop:15,fontWeight:'bold'}}> Component                 Range</Text>
		<Text style={{color: '#fff',marginTop:15}}> Sodium		                      135 - 140 mmol/L</Text>
		<Text style={{color: '#fff'}}> Potassium                   3.2 - 5.0 mEq/L</Text>
		<Text style={{color: '#fff'}}> Bicarbonate                 22 - 32 mmol/L</Text>
		<Text style={{color: '#fff'}}> Chloride                        96 - 109 mmol/L</Text>

		
	  </View>
	);
  };
  
  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: 'white',
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	frontStyle: {
	  width: 300,
	  height: 500,
	  backgroundColor: 'darkmagenta',
	  justifyContent: 'center',
	  alignItems: 'center',
	  borderRadius: 20,
	},
	backStyle: {
	  width: 300,
	  height: 500,
	  backgroundColor: 'darkmagenta',

	  borderRadius: 20,
	},
  });
  
  export default App;