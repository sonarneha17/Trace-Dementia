

import { db } from './config';
import { StyleSheet, Text, View,Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';;
import { Ionicons } from "@expo/vector-icons";
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import firebase from '../../../database/firebase';

const AddPatient = ({ navigation }) => {

   
  const [patientID, setPatientID] = useState('');
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [phoneno, sePhoneno] = useState('');
  const [age, setAge] = useState('');
  var dbUser = firebase.auth().currentUser.email;

  const handleEmail = () => {

    const validEmail = /\S+@\S+\.\S+/.test(email);
 
    if(!validEmail ){
      alert('Enter a valid email address');
      }
  };

  const handlePhone = () => {

    const validPhone = /^[0-9]{10}$/.test(phoneno);
 
    if(!validPhone)
    {
      alert('Enter a valid phone number ranges upto 10 ');
    }
  };

const handleAge = () => {

  const validAge = /^[1-9][0-9]?$|^100$/.test(age);
 
  if(!validAge)
    {
      alert('Please enter a valid age between 1 and 100');
    }
  };

  

  function Create () 
  {
      getDoc(doc(db, dbUser, patientID)).then(docData => { 
      // Data saved successfully!

      if (docData.exists()) {

      Alert.alert(  
        'Warning',  
        'Patient already exist.',  
        [    
            {text: 'OK', onPress: () => navigation.navigate('PatientHomePage')},  
        ],  
        {cancelable: false}  
    )  

  } 
  else 
  {


    setDoc(doc(db,dbUser, patientID), { 
      patientID: patientID,    
      name: name,
      email: email,
      phoneno: phoneno,
      age: age,
      }).then(() => { 
    // Data saved successfully!
    console.log('data submitted'); 
    Alert.alert(  
      'Success',  
      'Patient data saved.',  
      [    
          {text: 'OK', onPress: () => navigation.navigate('PatientHomePage')},  
      ],  
      {cancelable: false}  
  ) 
 

    }).catch((error) => { 
        // The write failed...
      console.log(error);
  });
  }

  }).catch((error) => {
    // The write failed...
    console.log(error);
  })
};




  return (
    <View style={styles.container}> 

      <TextInput value={patientID} 
      keyboardType='numeric'
          onChangeText={(patientID) => {setPatientID(patientID)}} 
          placeholder="patient ID" 
          style={styles.textBoxes}>
      </TextInput>

      <TextInput value={name} 
          onChangeText={(name) => {setName(name)}} 
          placeholder="Patient Name" style={styles.textBoxes}>
      </TextInput>

      <TextInput value={email} 
          onChangeText={(email) => {setEmail(email)}} 
          placeholder=" Email" 
          onEndEditing={handleEmail}
          style={styles.textBoxes}>
      </TextInput>

      <TextInput value={phoneno} 
          onChangeText={(phoneno) => {sePhoneno(phoneno)}} 
          placeholder="Phone no"
          onEndEditing={handlePhone}
          keyboardType="numeric" 
          style={styles.textBoxes}>
      </TextInput>

      <TextInput value={age} 
          onChangeText={(age) => {setAge(age)}} 
          placeholder="Age" 
          keyboardType="numeric"
          style={styles.textBoxes}>
      </TextInput>

      <TouchableOpacity
          style={styles.customBtnBG}
          onPress={Create}>
          <Text style={styles.customBtnText}>Add Patient</Text>
          <Ionicons style={styles.addicon}
		        name="md-person-add"
            size={26}
			      color="white"
		      />
        </TouchableOpacity>    

    </View>
  );
   
};

const styles = StyleSheet.create({
   container: {  
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   textBoxes: {
     height:50,
     width: '90%', 
     fontSize: 16,
     marginBottom:10,
     padding: 12,
     borderColor: 'gray', 
     borderWidth: 0.2,
     borderRadius: 10
   } ,

   /* Here style the text of your button */
   customBtnText: {
     fontSize: 20,
     padding:10,
     fontWeight: '400',
     color: "#fff",
     justifyContent: 'center',
     alignItems: 'center',
 },
 
 /* Here style the background of your button */
 customBtnBG: {
  flexDirection: 'row',
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: "darkmagenta",
 marginTop: 10,
 marginBottom: 40,
 width : 200,
 height: 60,
 paddingHorizontal: 30,
 paddingVertical: 5,
 borderRadius: 30
 },
 
 });

export default AddPatient;