import { StyleSheet, Text, View,ScrollView, Image, Pressable , TouchableOpacity,Alert} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {TextInput } from 'react-native-paper';
import { db } from '../PatientPages/config';
import { useState } from 'react';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import firebase from '../../../database/firebase';

const QuestionnaireHomeScreen = () => {
    const navigation = useNavigation();
    const [patientID, setPatientID] = useState('');
    getDoc(doc(db, "users", 'patientID'));
    const [shouldShow, setShouldShow] = useState(true);
    var dbUser = firebase.auth().currentUser.email;

    const renderItem = () => (
      <View>
        <Text> Hello</Text>
      </View>
    )

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
          setPatientID(docData.data().patientID); 
          navigation.navigate("QuestionnaireQuizScreen", {param1:patientID});
          
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
    <ScrollView style={{ marginTop: 15 }}>

      <Text style={{color:'darkmagenta',fontSize:24,fontWeight:'bold',marginLeft: "auto",marginRight: "auto",}}>Welcome to the MMSE test</Text>
      <Text style={{marginTop:15,fontSize:14,fontWeight:'bold'}}> This Test consist of 5 Sections</Text>
      <View style={{marginLeft:20}}>
      <Text style={{marginTop:10,fontSize:16}}>1. Basic Quiz Challenge</Text>
      <Text style={{fontSize:16}}>2. Grid based Quiz </Text>
      <Text style={{fontSize:16}}>3. Pattern Based Quiz</Text>
      <Text style={{fontSize:16}}>4. Remembrance Test</Text>
      <Text style={{fontSize:16}}>5. Symbol Matching Test</Text>
      </View>

      <Text style={{fontSize:18,fontWeight:'bold',marginTop:15}}>📝 Note:</Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Please take a time to read all the instructions. </Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Please take do not tempted to skip the questions. </Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ All the sections are timed, the timer will start when you press 'Start Quiz' button.</Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ The 'Next Question' and 'Next Section' button will always be at the bottom.</Text>


        <TextInput value={patientID} 
          label = "Patient ID" 
          mode = 'outlined'
          keyboardType='numeric'
          onChangeText={(patientID) => {setPatientID(patientID)}}  
          style={styles.textBoxes}>
        </TextInput>
 
       <TouchableOpacity
           style={styles.customBtnBG}
           onPress={getSepcificDataWithID}>
           <Text style={styles.customBtnText}>Start Quiz</Text>
         </TouchableOpacity>  







         

        

    </ScrollView>
  );
};

export default QuestionnaireHomeScreen;

const styles = StyleSheet.create({
  customBtnBG: {
    flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     marginLeft: "auto",
     marginRight: "auto",
     backgroundColor: "darkmagenta",
     marginTop: 30,
     marginBottom: 30,
     width : 200,
     height: 60,
     paddingHorizontal: 30,
     paddingVertical: 5,
     borderRadius: 30
   },
   customBtnText: {
    fontSize: 22,
    fontWeight: '400',
    padding:10,
    color: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
},
textBoxes: { 
  width: 300,
 fontSize: 16,
 marginTop:15,
 activeBorderColor:'black',
 activeValueColor:'black',
 borderRadius:15,
 marginLeft: "auto",
 marginRight: "auto",
}
});
