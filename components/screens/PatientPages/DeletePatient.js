import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, SafeAreaView,ScrollView, TouchableOpacity,Alert } from 'react-native';
import React, { useState } from 'react';;
import { Ionicons } from "@expo/vector-icons";
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import { db } from './config';
import firebase from '../../../database/firebase';



const DeletePatient = ({ navigation }) => {

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
       // Data saved successfully!
 
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
 
 
 
   function DeletePatient () 
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
       // Data saved successfully!
 
       if (docData.exists()) 
       {
         deleteDoc(doc(db, dbUser, patientID));
         Alert.alert(  
            'Success',  
            'Patient data deleted.',  
            [    
                {text: 'OK', onPress: () => navigation.navigate('PatientHomePage')},  
            ],  
            {cancelable: false}  
        ) 
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
   
 
   return (
     <SafeAreaView style={styles.container}> 
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.searchicon}>
       <TextInput value={patientID} 
            keyboardType='numeric'
           onChangeText={(patientID) => {setPatientID(patientID)}} 
           placeholder="Enter patient ID" 
           style={styles.searchtextBoxes}/>

       </View>      
 
 
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
 
         <Text 
           onChangeText={(name) => {setName(name)}} 
           style={styles.textBoxes}>
             Name : {name}
       </Text>
 
       <Text 
           onChangeText={(email) => {setEmail(email)}} 
           style={styles.textBoxes}>
             Email :  {email}
       </Text>
 
       <Text  
           onChangeText={(phoneno) => {sePhoneno(phoneno)}} 
           style={styles.textBoxes}>
             Phone No : {phoneno}
       </Text>
 
       <Text 
           onChangeText={(age) => {setAge(age)}}  
           style={styles.textBoxes}>
             Age: {age} 
       </Text> 
      
 
       <TouchableOpacity
           style={styles.customBtnBGD}
           onPress={DeletePatient}>
           <Text style={styles.customBtnText}>Delete</Text>
           <Ionicons style={styles.trashicon}
		        name="md-trash"
            size={23}
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
    flexDirection: 'row',
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
   /* Here style the text of your button */
   customBtnText: {
     fontSize: 20,
     fontWeight: '400',
     padding: 10,
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
 marginLeft:65,
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
   backgroundColor: "red",
   marginLeft:60,
   marginTop: 10,
   marginBottom: 40,
   width : 200,
   height: 60,
   paddingHorizontal: 30,
   paddingVertical: 5,
   borderRadius: 30
   },
   trashicon: {
    height: 30,
    width: 20,  
 },
 searchicon: {
  flex:1,
  marginTop:30,
  flexDirection: 'row',
  marginRight:15,
 },
 searchstyle:{
  slex:1,
  marginTop: 25,
 }
 
 });


export default DeletePatient;