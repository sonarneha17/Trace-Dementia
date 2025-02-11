import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert, SafeAreaView,ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { db } from '../PatientPages/config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import { Ionicons } from "@expo/vector-icons";
import {TextInput } from 'react-native-paper';
import firebase from '../../../database/firebase';



const ViewPage = () => {

   const [patientID, setPatientID] = useState('');


  const [sodium, setSodiumR] = useState('');
  const [potassium, setPotassiumR] = useState(''); 
  const [chloride , setChlorideR] = useState('');
  const [bicarbonate, setBicarbonateR] = useState('');

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
              setSodiumR(docData.data().sodium);
              setPotassiumR(docData.data().potassium);   
              setBicarbonateR(docData.data().bicarbonate);
              setChlorideR(docData.data().chloride);
              if (!(docData.data().sodium && docData.data().potassium && docData.data().bicarbonate && docData.data().chloride)) 
              {
                Alert.alert(  
                   'Warning',  
                   'Lab test not coducted',  
                   [    
                       {text: 'OK'},  
                   ],  
                   {cancelable: false}  
               )
                return;
              }
              else
              {
                
                setSodiumR(docData.data().sodium);
                setPotassiumR(docData.data().potassium);   
                setBicarbonateR(docData.data().bicarbonate);
                setChlorideR(docData.data().chloride);

              }
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
      setPatientID({value:''});
      setSodiumR({value:''});
      setPotassiumR({value:''});
      setBicarbonateR({value:''});
      setChlorideR({value:''});

   }

   return (
     <SafeAreaView style={styles.container}> 
     <ScrollView  showsVerticalScrollIndicator={false}>
       <TextInput value={patientID} 
           mode = 'outlined'
           onFocus={ClearValue}
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


      <TextInput value={sodium} 
      label="Sodium"
      mode = 'outlined'
          onChangeText={(sodium) => {{setSodiumR(sodium)} }}
          style={styles.textBoxes}>
           
      </TextInput>


      <TextInput value={potassium} 
         label="Potassium"
         mode = 'outlined'
          onChangeText={(potassium) => {setPotassiumR(potassium)}}
          style={styles.textBoxes} >
      </TextInput>

      <TextInput value={bicarbonate} 
         label="Bicarbonate"
         mode = 'outlined'
          onChangeText={(bicarbonate) => {setBicarbonateR(bicarbonate)}}
          style={styles.textBoxes}  >
      </TextInput>

      <TextInput value={chloride} 
         label="Chloride"
         mode = 'outlined'
          onChangeText={(chloride) => {setChlorideR(chloride)}}
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
      width: 300,
     fontSize: 16,
     marginTop:15,
     activeBorderColor:'black',
     activeValueColor:'black',
     borderRadius:15,
   } ,
   searchtextBoxes: {
     width: 300, 
     fontSize: 16,
     marginTop:5,
     marginBottom:5,
     padding: 12,
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
   marginTop: 10,
   marginBottom: 10,
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
  marginTop: 15,
  marginBottom: 40,
  width : 200,
  height: 60,
  paddingHorizontal: 30,
  paddingVertical: 5,
  borderRadius: 30
  },
 });


export default ViewPage;