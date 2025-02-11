import React, { Component,useState } from "react";
import { Button, SafeAreaView, StyleSheet, Alert, Text,Image,TouchableOpacity,View } from "react-native";
import { TextInput } from 'react-native-paper';
//Importing the installed libraries
import * as FS from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import firebase from '../../../database/firebase';
import { db } from '../PatientPages/config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore";

global.result='';


const MriPage = ({ navigation }) => {
   const [patientID, setPatientID] = useState('');
   const [visibility,setVisibility] = useState(false)
      const [cameraRollPer,setcameraRollPer] = useState('null')
      const [disableButton,setdisableButton] = useState(false)
      const [mriresult,setMRIResult] = useState('')
      const { status } =  ImagePicker.requestMediaLibraryPermissionsAsync();

      var dbUser = firebase.auth().currentUser.email;
 
      getDoc(doc(db, dbUser, 'patientID'));

      const onClickHandler = (state, props) => {
         setcameraRollPer('granted')
         setdisableButton(false)
       }

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
         console.log(docData.data());
         setVisibility(true)

         
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
    
  
    
    uriToBase64 = async (uri) => {
      let base64 = await FS.readAsStringAsync(uri, {
        encoding: FS.EncodingType.Base64,
      });
      return base64;
    };
  
    pickMedia = async () => {
      
      onClickHandler((state, props) => {
        return {
          cameraRollPer: state.cameraRollPer,
          disableButton: true,
        };
      });
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        base64: true,
      });
      if (result.cancelled) {
        return;
      }
      if (result.type == "image") {
        await toServer({
          type: result.type,
          base64: result.base64,
          uri: result.uri,
        });
      } else {
        let base64 = await uriToBase64(result.uri);
        await toServer({
          type: result.type,
          base64: base64,
          uri: result.uri,
        });
      }
    };
  
    toServer = async (mediaFile) => {
      let type = mediaFile.type;
      let schema = "http://";
      let host = "192.168.7.171";
      let route = "";
      let port = "5000";
      let url = "";
      let content_type = "";
      type === "image"
        ? ((route = "/image"), (content_type = "image/jpeg"))
        : ((route = "/video"), (content_type = "video/mp4"));
      url = schema + host + ":" + port + route;
  
      let response = await FS.uploadAsync(url, mediaFile.uri, {
        headers: {
          "content-type": content_type,
        },
        httpMethod: "POST",
        uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
      });
  
      console.log(response.body);
      result = response.body;
      setMRIResult(response.body);

         getDoc(doc(db, dbUser, patientID)).then(docData => { 
  
   
           if (docData.exists()) 
           {
                 updateDoc(doc(db, dbUser, patientID), {     
                 mriresult:result,
                 }).then(() => { 
                 Alert.alert(  
                    'Success',  
                    'MRI result Saved for patient '+patientID,  
                    [    
                          {text: 'OK', onPress: (visibility) => {ClearInput()
                        setVisibility(false)
                        setMRIResult('')
                     }},  
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
                    {text: 'OK', onPress: () => ClearInput()},  
              ],  
              {cancelable: false}  
           )
           }
     
           }).catch((error) => {
         // The write failed...
         console.log(error);
         })

         function ClearInput()
         {
            setPatientID('')
       
         }


   
       
    };
  
      return (
        <SafeAreaView style={styles.container}>

<TextInput value={patientID} 
         label = "Patient ID" 
         mode = 'outlined'
         keyboardType='numeric'
          onChangeText={(patientID,visibility) => {setPatientID(patientID)
            setVisibility(false) }}  
          onFocus={(visibility)=>{setVisibility(false)}}
          style={styles.textBoxes}>
      </TextInput>

      <TouchableOpacity
           style={styles.customBtnBG}
           onPress={getSepcificDataWithID}
      >
           <Text style={styles.customBtnText}>Search</Text>

         </TouchableOpacity>  

         {visibility ? ( 
         <View>
          {cameraRollPer ? (
  <View>
      <TouchableOpacity
            style={styles.customBtnBG}
            onPress={async () => {
              await pickMedia();
              onClickHandler((s, p) => {
                return {
                  cameraRollPer: s.cameraRollPer,
                  disableButton: false,
                };
              });
            }}
            disabled={disableButton}>
            <Text style={styles.customBtnText}>Upload MRI</Text>
              
  
              </TouchableOpacity> 

            <Text style={{marginLeft:'auto',marginRight:'auto'}}> {mriresult}</Text> 

            </View>
         ) : (
            <Text>Camera Roll Permission Required ! </Text>
          )}
          </View>
          ):(
         <></>
          )}
  
          


        </SafeAreaView>
      );
    };

 export default MriPage;
  
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
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
  textBoxes: { 
   width: 300,
  fontSize: 16,
  marginTop:15,
  activeBorderColor:'black',
  activeValueColor:'black',
  borderRadius:15,
} ,
  });