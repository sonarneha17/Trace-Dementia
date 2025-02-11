import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Alert,TextInput, SafeAreaView,ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';;
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import { db } from './config';
import { Ionicons } from "@expo/vector-icons";
import firebase from '../../../database/firebase';



const UpdatePatient = ({ navigation }) => {

   const [patientID, setPatientID] = useState('');
   const [name, setName] = useState(''); 
   const [email, setEmail] = useState('');
   const [phoneno, sePhoneno] = useState('');
   const [age, setAge] = useState('');
   var dbUser = firebase.auth().currentUser.email;
 
   getDoc(doc(db, dbUser, 'patientID'));

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
         console.log('No such a data!');
         alert('Not Found...!!!');
       }
 
       }).catch((error) => {
     // The write failed...
     console.log(error);
     })
   }
   
 
 
   function Update () {
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
     updateDoc(doc(db, dbUser, patientID), {     
       name: name,
       email: email,
       phoneno: phoneno,
       age: age,
     }).then(() => { 
      Alert.alert(  
         'Success',  
         'Patient data Updated.',  
         [    
             {text: 'OK', onPress: () => navigation.navigate('PatientHomePage')},  
         ],  
         {cancelable: false}  
     )
 
     }).catch((error) => {
           console.log(error);
           alert('Data not updated. Please try again');
     });
 
     }
 
   return (
     <SafeAreaView style={styles.container}> 
     <ScrollView showsVerticalScrollIndicator={false}>
       <TextInput value={patientID} 
           keyboardType="numeric"
           onChangeText={(patientID) => {setPatientID(patientID)}} 
           placeholder="Enter patient ID" 
           style={styles.searchtextBoxes}>
       </TextInput>
 
       <TouchableOpacity
           style={styles.customBtnBG}
           onPress={getSepcificDataWithID}>
           <Text style={styles.customBtnText}>Get Info</Text>
           <Ionicons 
		        name="md-cloud-download"
            size={26}
			      color="white"
		      />
         </TouchableOpacity> 
 
         <TextInput value={name} 
           onChangeText={(name) => {setName(name)}} 
           placeholder="Patient Name" style={styles.textBoxes}>
       </TextInput>
 
       <TextInput value={email} 
           onChangeText={(email) => {setEmail(email)}} 
           onEndEditing={handleEmail}
           placeholder=" Email" 
           style={styles.textBoxes}>
       </TextInput>
 
       <TextInput value={phoneno} 
           onChangeText={(phoneno) => {sePhoneno(phoneno)}} 
           onEndEditing={handlePhone}
           placeholder="Phone no" 
           style={styles.textBoxes}>
       </TextInput>
 
       <TextInput value={age} 
           onChangeText={(age) => {setAge(age)}} 
           placeholder="Age" 
           style={styles.textBoxes}>
       </TextInput>
 
       <TouchableOpacity
           style={styles.customBtnBGD}
           onPress={Update}>
           <Text style={styles.customBtnText}> Update </Text>
           <Ionicons 
		        name="md-cloud-upload"
            size={26}
			      color="white"
		      />
         </TouchableOpacity> 
      </ScrollView>
     </SafeAreaView>
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
     width: 300, 
     fontSize: 16,
     marginBottom:10,
     padding: 12,
     borderColor: 'gray', 
     borderWidth: 0.2,
     borderRadius: 10
   } ,
   searchtextBoxes: {
     height:50,
     width: 300, 
     fontSize: 16,
     marginTop:10,
     marginBottom:10,
     padding: 12,
     borderColor: 'gray', 
     borderWidth: 0.2,
     borderRadius: 10
   } ,
 
   customBtnText: {
     fontSize: 20,
     fontWeight: '400',
     padding:10,
     color: "#fff",
     justifyContent: 'center',
     alignItems: 'center',
 },
 

 customBtnBG: {
  flexDirection: 'row',
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: "darkmagenta",
 marginLeft:55,
 marginTop: 10,
 marginBottom: 40,
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

export default UpdatePatient;