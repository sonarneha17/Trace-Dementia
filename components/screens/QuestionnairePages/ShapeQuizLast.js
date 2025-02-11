import React,{useEffect, useState} from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { db } from '../PatientPages/config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import firebase from '../../../database/firebase';


const ShapeQuizLast = ({route}) => {
    const navigation = useNavigation();

	var id = route.params.p_id;
    var final_score = route.params.param_quiz5_score;
    var final_time = route.params.param_quiz5_time;
	const [result,setResult]=useState();
	var dbUser = firebase.auth().currentUser.email;

	const [patientID, setPatientID] = useState(id);
	const [test1Score, setTest1Score] = useState(final_score); 
	const [test1Time, setTest1Time] = useState(final_time);
	const [test1Result, setTest1Result] = useState(final_time);

	function Create () 
	{
		getDoc(doc(db, dbUser, patientID)).then(docData => { 
		// Data saved successfully!
  	  updateDoc(doc(db, dbUser, patientID), { 
		patientID: patientID,    
		test1Result:test1Result,
		test1Score:test1Score,
		test1Time:test1Time

		

		}).then(() => { 
	  // Data saved successfully!
	  console.log('data submitted'); 
	  }).catch((error) => { 
		  // The write failed...
		console.log(error);
	});
	}
  )
  };
  useEffect(()=>{
	if(final_score>=24)
	{
		setTest1Result('No Cognitive Impairment');	
	}
		
	else if(final_score>=18 && final_score<=23)
	{
		setTest1Result('Mild Cognitive Impairment');
	}
		
	else
	{
		setTest1Result('Severe Cognitive Impairment');
		
	}
}, []);
 
		

	
  


	const Calculate_severity = (final_score) => {
		if(final_score>=24)
		{
			return (<View><Text style={{fontSize:18}}>No Cognitive Impairment</Text></View>);
		}
			
		else if(final_score>=18 && final_score<=23)
		{
			return (<View><Text style={{fontSize:18}}>Mild Cognitive Impairment</Text></View>);
		}
			
		else
		{
			return (<View><Text style={{fontSize:18}}>Severe Cognitive Impairment</Text></View>);	
		}
			
	};


return (
    
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
		<>
		{
		
		Create()

		}
		</>
		<View style={{backgroundColor:'thistle',marginTop:20,marginBottom:20}}>
		<Text style={{fontSize:18}}> Patient ID : {id}</Text>  
        <Text style={{fontSize:18, marginTop:15}}> Final score : {final_score}/30</Text> 
        <Text style={{fontSize:18, marginTop:15}}> Final Time : {final_time}</Text> 
		<Text style={{fontSize:18, marginTop:15}}> Severity Level : {Calculate_severity(final_score)}</Text>
		</View>
	</View>
);
};

export default ShapeQuizLast;