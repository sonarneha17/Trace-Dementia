

import { db } from '../PatientPages/config';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Alert, SafeAreaView,ScrollView, TouchableOpacity,View } from 'react-native';
import React, { useState } from 'react';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from 'react-native-paper';
import firebase from '../../../database/firebase';



const AddPage = ({ navigation }) => {

   const [patientID, setPatientID] = useState('');
  const [sodium, setSodium] = useState('');
  const [potassium, setPotassium] = useState(''); 
  const [chloride , setChloride] = useState('');
  const [bicarbonate, setBicarbonate] = useState('');

  const [sodiumR, setSodiumR] = useState(sodiumR);
  const [potassiumR, setPotassiumR] = useState(potassiumR); 
  const [chlorideR , setChlorideR] = useState(chlorideR);
  const [bicarbonateR, setBicarbonateR] = useState(bicarbonateR);

  

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

         
       } 
       else 
       {

         Alert.alert(  
            'Not found',  
            'Patient ID '+patientID+'does not exist...!!!',  
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

 
   
   function ClearInput()
   {
      setSodium({value:''});
      setPotassium({value:''});
      setBicarbonate({value:''});
      setChloride({value:''});
 
   }

   function Calculate()
   {
          //result logic
               //Sodium
               if(sodium < 135  )
               {
                 setSodiumR(sodium.concat(' - Low'))
               }
               else if (sodium >145)
               {
                 setSodiumR(sodium.concat(' - High'))
               }
               else
               {
                setSodiumR(sodium.concat(' - Normal'))
               }

               //Potassium
               if(potassium < 3.5  )
               {
                 setPotassiumR(potassium.concat(' - Low'))
               }
               else if(potassium > 5.0 )
               {
                 setPotassiumR(potassium.concat(' - High'))
               }
               else
               {
                setPotassiumR(potassium.concat(' - Normal'))
               }


               //Bicarbonate
               if(bicarbonate < 22 && bicarbonate <=32 )
               {
                 setBicarbonateR(bicarbonate.concat(' - Low'))
               }
               else if(bicarbonate > 32)
               {
                 setBicarbonateR(bicarbonate.concat(' - High'))
               }
               else
               {
                setBicarbonateR(bicarbonate.concat(' - Normal'))
               }

               //chloride
               if(chloride < 96  )
               {
                 setChlorideR(chloride.concat(' - Low'))
               }
               else if(chloride > 109)
               {
                 setChlorideR(chloride.concat(' - High'))
               }
               else
               {
                setChlorideR(chloride.concat(' - Normal'))
               }
   }
 
 
   function AddScore () {
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


              Calculate();
              updateDoc(doc(db, dbUser, patientID), {     
               sodium: sodiumR,    
               potassium: potassiumR,
               chloride: chlorideR,
               bicarbonate: bicarbonateR, 
 
               }).then(() => { 
               Alert.alert(  
                  'Success',  
                  'Lab Test Score Saved for patient '+patientID,  
                  [    
                        {text: 'OK', onPress: () => ClearInput()},  
                  ],  
                  {cancelable: false}  
               )
            
               }).catch((error) => {
                     console.log(error);
                     Alert.alert(  
                        'Failed',  
                        'Patient does not exist with '+patientID,  
                        [    
                              {text: 'OK', onPress: () => ClearInput()},  
                        ],  
                        {cancelable: false}  
                     )
               });
         } 
         else 
         {
           console.log('No such a data!');
           Alert.alert(  
            'Failed',  
            'Patient does not exist with '+patientID,  
            [    
                  {text: 'OK', onPress: () => {ClearInput()
                  updateScore()}},  
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
     <ScrollView showsVerticalScrollIndicator={false}>

      <TextInput value={patientID} 
         label = "Patient ID" 
         mode = 'outlined'
          onChangeText={(patientID) => {setPatientID(patientID)}}  
          style={styles.textBoxes}>
      </TextInput>

      <TextInput value={sodium} 
         label = "Sodium" 
         mode = 'outlined'
         keyboardType="numeric"
         onFocus={getSepcificDataWithID}
          onChangeText={(sodium) => {setSodium(sodium)}} 
          style={styles.textBoxes}>
      </TextInput>

      <TextInput value={potassium} 
            label = "Potassium" 
            mode = 'outlined'
            keyboardType="numeric"
            onFocus={getSepcificDataWithID}
          onChangeText={(potassium) => {setPotassium(potassium)}} 
          style={styles.textBoxes}>
      </TextInput>

      <TextInput value={bicarbonate} 
         label = "Bicarbonate" 
         mode = 'outlined'
         keyboardType="numeric"
         onFocus={getSepcificDataWithID}
          onChangeText={(bicarbonate) => {setBicarbonate(bicarbonate)}}  
          style={styles.textBoxes}>
      </TextInput>

      <TextInput value={chloride} 
          label = "Chloride" 
          mode = 'outlined'
          keyboardType="numeric"
          onFocus={getSepcificDataWithID}
          onChangeText={(chloride) => {setChloride(chloride)}}  
          style={styles.textBoxes}>
      </TextInput>


      <TouchableOpacity
          style={styles.customBtnBG}
          onPress={AddScore}>
          <Text style={styles.customBtnText}>Add Score</Text>
          <Ionicons style={styles.addicon}
		        name="md-add-circle"
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
      width: 300,
     fontSize: 16,
     marginTop:15,
     activeBorderColor:'black',
     activeValueColor:'black',
     borderRadius:15,
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
 marginTop: 30,
 marginBottom: 40,
 width : 200,
 height: 60,
 paddingHorizontal: 30,
 paddingVertical: 5,
 borderRadius: 30
 },

 });

export default AddPage;