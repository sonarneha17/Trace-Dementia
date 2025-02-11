
import { StatusBar } from 'expo-status-bar';
import * as MailComposer from 'expo-mail-composer';
import * as Print from 'expo-print';
import { StyleSheet, Text, View,Alert, SafeAreaView,ScrollView, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {TextInput } from 'react-native-paper';
import firebase from '../../database/firebase';
import React, { useState,useEffect } from 'react';
import { db } from '../../components/screens/PatientPages/config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
global.final_lab_result = '';

const Results = () => {
	const [patientID, setPatientID] = useState('');
	const [QuestionnaireResult, setQuestionnaireResult] = useState(QuestionnaireResult);
	const [LabTestResult, setLabTestResult] = useState(LabTestResult); 
	const [MriResult , setMriResult] = useState(MriResult);

  const [name,setName] = useState('')

  const [sodium, setSodium] = useState(sodium);
  const [potassium, setPotassium] = useState(potassium); 
  const [chloride , setChloride] = useState(chloride);
  const [bicarbonate, setBicarbonate] = useState(bicarbonate);

  const [isAvailable, setIsAvailable] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const [subject, setSubject] = useState(undefined);
  const [body, setBody] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  const [visibility,setVisibility] = useState(false)

  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }

    checkAvailability();
  }, []);

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
            setVisibility(true)
              setName(docData.data().name)
              setSodium(docData.data().sodium)
              setPotassium(docData.data().potassium)
              setBicarbonate(docData.data().bicarbonate)
              setChloride(docData.data().chloride)
              final_lab_result = 'Sodium : '+sodium +'\n'+'Potassium : '+ potassium +'\n'+'Bicarbonate : ' +bicarbonate +'\n'+'Chloride : '+ chloride

              setQuestionnaireResult(docData.data().test1Result);
              setLabTestResult('Sodium : '+docData.data().sodium +'\n'+'Potassium : '+ docData.data().potassium +'\n'+'Bicarbonate : ' +docData.data().bicarbonate +'\n'+'Chloride : '+ docData.data().chloride);  
              setMriResult(docData.data().mriresult);

              if (!(docData.data().test1Result && 
              docData.data().sodium &&
              docData.data().potassium &&
              docData.data().bicarbonate &&
              docData.data().chloride &&
              docData.data().mriresult )) 
              {
                
                
                Alert.alert(  
                   'Warning',  
                   'Empty field indicates tests not coducted',  
                   [    
                       {text: 'OK'},  
                   ],  
                   {cancelable: false}  
               )
                return;
              }
              else
              {
                setName(docData.data().name)
                setSodium(docData.data().sodium)
                setPotassium(docData.data().potassium)
                setBicarbonate(docData.data().bicarbonate)
                setChloride(docData.data().chloride)
                
                setQuestionnaireResult(docData.data().test1Result);
                setLabTestResult('Sodium : '+docData.data().sodium +'\n'+'Potassium : '+ docData.data().potassium +'\n'+'Bicarbonate : ' +docData.data().bicarbonate +'\n'+'Chloride : '+ docData.data().chloride);   
                setMriResult(docData.data().mriresult);

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
	   setQuestionnaireResult({value:''});
	   setLabTestResult({value:''});
	   setMriResult({value:''});
     
 
	}


  const sendMail = async () => {
    const { uri } = await Print.printToFileAsync({
      html: 
      "<head><style>  table{border-collapse: collapse; width: 100%;} th,td{border: 2px solid green;padding: 15px;}  </style></head>"+
      "<center><h1> JAGRUTI REHABILITATION CENTER </h1></center> <br>" +
      "<h3> ADDRESS - Zhagade Wasti, Near Loni Toll Naka, Solapur - Pune Hwy, Manjri, Hadapsar, Pune, Maharashtra 412307</h3>" +
      "<h3> CONTACT NO - 987654321</h3>" +
      "<h3> Doctor email - "+dbUser+"</h3>"+
      "<br>" +
      "<hr style='width:100%;text-align:left;margin-left:0'>" +
      "<h4>PatientID: "+patientID+ "<h4>"+
      "<h4>Patient Name: "+name+ "<h4>"+
      "<h4>Detailed Report<h4>"+
      "<table>"+  
      "<tr> <th> Test </th> <th> Result </th> </tr>"+  
      "<tr> <td> Questionnaire </td> <td>"+ QuestionnaireResult +"</td> </tr> "+ 
      "<tr>"+
      "<td>Lab Test</td>"+
      "<td>"+
          "<table>"+
              "<tr>"+
                  "<td> Sodium </td>"+
                  "<td>"+ sodium +"</td>"+
              "</tr>"+
              "<tr>"+
                  "<td> Potassium </td>"+
                  "<td>"+ potassium +"</td>"+
              "</tr>"+
              "<tr>"+
                  "<td> Bicarbonate </td>"+
                  "<td>"+ bicarbonate +"</td>"+
              "</tr>"+
              "<tr>"+
                  "<td> Chloride </td>"+
                  "<td>"+ chloride +"</td>"+
              "</tr>"+
          "</table>"+
      "</td>"+
  "</tr>"+
  "<tr> <td> MRI Result </td> <td>"+ MriResult +"</td> </tr>"+ 
      "</table> "


    });

    MailComposer.composeAsync({
      //subject: subject,
      subject: "Dementia Report of patient "+name+" [id-"+patientID+"]",
      //body: body,
      body:"Dear "+ name+","+
      "\n\nGreetings for the day."+
      "\n\nPlease find the attached dementia report.",
      recipients: recipients,
      attachments: [uri]
    });
  };


return (



	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
		
		<ScrollView  showsVerticalScrollIndicator={false}>
       <TextInput value={patientID} 
           mode = 'outlined'
          keyboardType='numeric'
           onFocus={(visibility)=>{ClearValue()
            setVisibility(false)}}
           onChangeText={(patientID) => {setPatientID(patientID)}} 
           placeholder="Enter patient ID" 
           style={styles.searchtextBoxes}>
       </TextInput>
 
       <TouchableOpacity
           style={styles.customBtnBG}
           onPress={getSepcificDataWithID}>
           <Text style={styles.customBtnText}>Get Result</Text>
           <Ionicons style={styles.addicon}
		        name="md-cloud-download"
            size={26}
			      color="white"
		      />
         </TouchableOpacity>  

      {visibility? (
      <View>
          <TextInput value={QuestionnaireResult} 
      label="Questionnaire Result"
      mode = 'outlined'
          onChangeText={(QuestionnaireResult) => {{setQuestionnaireResult(QuestionnaireResult)} }}
          style={styles.textBoxes}>
           
      </TextInput>


      <TextInput value={LabTestResult} 
        multiline
         label="Lab Test Result"
         mode = 'outlined'
          onChangeText={(LabTestResult) => {setLabTestResult(LabTestResult)}}
          style={styles.textBoxes} >
      </TextInput>

      <TextInput value={MriResult} 
         label="MRI Result"
         mode = 'outlined'
          onChangeText={(MriResult) => {setMriResult(MriResult)}}
          style={styles.textBoxes}  >
      </TextInput>

	  <TouchableOpacity
           style={styles.customBtnBG1}
           onPress={sendMail}>
           <Text style={styles.customBtnText}>Email Result</Text>
           <Ionicons style={styles.addicon}
		        name="md-mail"
            size={26}
			      color="white"
		      />
         </TouchableOpacity> 

      </View>):(<></>)}
      


       </ScrollView>
	</View>
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
	marginLeft:'auto',
	marginRight:'auto',
	backgroundColor: "darkmagenta",
	marginTop: 10,
	marginBottom: 10,
	width : 200,
	height: 60,
	paddingHorizontal: 30,
	paddingVertical: 5,
	borderRadius: 30
  },
  customBtnBG1: {
	flexDirection: 'row',
	 alignItems: 'center',
	 justifyContent: 'center',
	 marginLeft:'auto',
	 marginRight:'auto',
	 backgroundColor: "darkmagenta",
	 marginTop: 25,
	 marginBottom: 10,
	 width : 250,
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

export default Results;
