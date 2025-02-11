import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DataTable,TextInput } from 'react-native-paper';
import firebase from '../../database/firebase';


const DoctorProfile = ({route,navigation}) => {
  
	return (
		<View style={styles.container}>
		  <View style={styles.header}></View>
		  <Image
			style={styles.avatar}
			source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
		  />

		
		<View style={{marginTop:100,marginLeft:'auto',marginRight:'auto'}}> 

			<TextInput 
      		label="Name"
			  value={firebase.auth().currentUser.displayName} 
          	style={styles.textBoxes}>
      		</TextInput>


      <TextInput 
         label="Email"
		 value={firebase.auth().currentUser.email}
          style={styles.textBoxes}>
      </TextInput>

	
	
			  <TouchableOpacity style={styles.buttonContainer}>
			  <Text style={styles.customBtnText}>Save</Text>
			  </TouchableOpacity>
			  </View>
			</View>

	  )
	}
	
	const styles = StyleSheet.create({
	  header: {
		backgroundColor: 'orchid',
		height: 130,
	  },
	  avatar: {
		width: 130,
		height: 130,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: 'white',
		marginBottom: 100,
		alignSelf: 'center',
		position: 'absolute',
		marginTop: 70,
	  },
	  name: {
		fontSize: 22,
		color: '#FFFFFF',
		fontWeight: '600',
	  },
	  body: {
		marginTop: 40,
	  },
	  bodyContent: {
		flex: 1,
		alignItems: 'center',
		padding: 30,
	  },
	  name: {
		fontSize: 28,
		color: '#696969',
		fontWeight: '600',
	  },
	  info: {
		fontSize: 16,
		color: '#00BFFF',
		marginTop: 10,
	  },
	  description: {
		fontSize: 16,
		color: '#696969',
		marginTop: 10,
		textAlign: 'center',
	  },
	  buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "darkmagenta",
		marginLeft:'auto',
		marginRight:'auto',
		marginTop: 30,
		marginBottom: 40,
		width : 200,
		height: 60,
		paddingHorizontal: 30,
		paddingVertical: 5,
		borderRadius: 30
	  },
	  customBtnText: {
		fontSize: 24,
		fontWeight: '400',
		padding:10,
		color: "#fff",
		justifyContent: 'center',
		alignItems: 'center',
	},
	textBoxes: {
		height:60,
		width: 300, 
		fontSize: 14,
		marginBottom: 10,
		marginTop: 10,
		borderColor: 'gray',
		backgroundColor: 'white', 
		borderRadius: 10,
		
	  } ,
	})

export default DoctorProfile;