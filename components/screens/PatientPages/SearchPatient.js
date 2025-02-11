import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert, SafeAreaView,ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { db } from './config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import { Ionicons } from "@expo/vector-icons";
import { DataTable,TextInput } from 'react-native-paper';
import firebase from '../../../database/firebase';




const SearchPatient = ({ navigation }) => {

   const [patientID, setPatientID] = useState('');
   const [name, setName] = useState(''); 
   const [email, setEmail] = useState('');
   const [phoneno, sePhoneno] = useState('');
   const [age, setAge] = useState('');
   var dbUser = firebase.auth().currentUser.email;
 
   getDoc(doc(db, dbUser, 'patientID'));
 
 
   function getSepcificDataWithID () 
   {

      if (!patientID.trim()) {
         Alert.alert(  
            'Warning',  
            'Enter Patient ID',  
            [    
                {text: 'OK'},  
            ],  
            {cancelable: false}  
        )
         return;
       }

       getDoc(doc(db, dbUser, patientID)).then(docData => { 
 

       if (docData.exists()) 
       {
         // console.log(docData.data());
         setName(docData.data().name);
         setEmail(docData.data().email);   
         sePhoneno(docData.data().phoneno);
         setAge(docData.data().age)
         
       } 
       else 
       {

         Alert.alert(  
            'Not found',  
            'Patient data is either deleted or does not exist',  
            [    
                {text: 'OK'},  
            ],  
            {cancelable: false}  
        ) 
       }
 
       }).catch((error) => {
     // The write failed...
     console.log(error); 
     })
   }

   function ClearValue()
   {
      setName({value:''});
      setEmail({value:''});
      sePhoneno({value:''});
      setAge({value:''});

   }

   return (
     <SafeAreaView style={styles.container}> 
     <ScrollView  showsVerticalScrollIndicator={false}>
       <TextInput value={patientID} 
          onFocus={ClearValue}
          keyboardType="numeric"
           onChangeText={(patientID) => {setPatientID(patientID)}} 
           placeholder="Enter patient ID" 
           style={styles.searchtextBoxes}>
       </TextInput>
 
       <TouchableOpacity
           style={styles.customBtnBG}
           onPress={getSepcificDataWithID}>
           <Text style={styles.customBtnText}>Search</Text>
           <Ionicons style={styles.addicon}
		        name="md-search"
            size={26}
			      color="white"
		      />
         </TouchableOpacity>  


      <TextInput value={name} 
      label="Name"
          onChangeText={(name) => {setName(name)}}  
          style={styles.textBoxes}>
      </TextInput>


      <TextInput value={email} 
         label="Email"
          onChangeText={(email) => {setEmail(email)}}  
          style={styles.textBoxes}>
      </TextInput>

      <TextInput value={phoneno} 
         label="Phone no"
          onChangeText={(phoneno) => {sePhoneno(phoneno)}}  
          style={styles.textBoxes}>
      </TextInput>

      <TextInput value={age} 
         label="Age"
          onChangeText={(age) => {setAge(age)}} 
          style={styles.textBoxes}>
      </TextInput>

       </ScrollView>
 
     </SafeAreaView>
   );

};

const styles = StyleSheet.create({
   container: {  
     flex: 1,
     display: "flex",
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   textBoxes: {
     height:60,
     width: 300, 
     fontSize: 14,
     marginBottom: 10,
     borderColor: 'gray',
     backgroundColor: 'white', 
     borderRadius: 10
   } ,
   searchtextBoxes: {
     height:50,
     width: 300, 
     fontSize: 16,
     marginTop:20,
     marginBottom:10,
     padding: 12,
     borderColor: 'gray', 
     borderWidth: 0.2,
     borderRadius: 10
   } ,

   customBtnText: {
     fontSize: 22,
     fontWeight: '400',
     padding:10,
     color: "#fff",
     justifyContent: 'center',
     alignItems: 'center',
 },
 
 customBtnBG: {
  flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   marginLeft:55,
   backgroundColor: "darkmagenta",
   marginTop: 30,
   marginBottom: 30,
   width : 200,
   height: 60,
   paddingHorizontal: 30,
   paddingVertical: 5,
   borderRadius: 30
 },
 customBtnBGD: {
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: "blue",
  marginLeft:60,
  marginTop: 10,
  marginBottom: 40,
  width : 200,
  height: 60,
  paddingHorizontal: 30,
  paddingVertical: 5,
  borderRadius: 30
  },
 });


export default SearchPatient;