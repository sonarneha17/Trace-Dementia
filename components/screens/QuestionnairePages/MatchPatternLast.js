import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Pressable,
    ScrollView,
    TouchableOpacity
  } from "react-native";
  import React,{useState,useEffect} from "react";
  import { useRoute } from "@react-navigation/native";
  import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import RemembranceQuiz from './RemembranceQuiz';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


  const MatchPatternLast = ({route}) => {

    const navigation = useNavigation();
    var id = route.params.param15;
    var Lastfinal_quiz3_score = route.params.param16;
    var LastFinal_quiz3_time = route.params.param17;

    
   const thing1 = ["Poppy","BlueBell","Snowdrop","Rose"];
    const [score1,setScore1]= useState();
    const [score2,setScore2]= useState();


    return (
      <SafeAreaView style={{ margin: 10 }}>
        <ScrollView>   
          <Text> Test Screen</Text>   
          <Text> Patient ID : {id}</Text>  
          <Text> Score till now : {Lastfinal_quiz3_score}</Text> 
          <Text> Time taken : {LastFinal_quiz3_time}</Text> 


          <Text style={{color:'darkmagenta',marginLeft:'auto',marginRight:'auto',marginTop:15,fontSize:20,fontWeight:'bold'}}> Section 4</Text>
          <Text style={{color:'darkmagenta',marginLeft:'auto',marginRight:'auto',marginTop:15,fontSize:24,fontWeight:'bold'}} >Remembrance Test</Text>
          <Text style={{fontSize:18,fontWeight:'bold',marginTop:25}}>📝 Instructions :</Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Earlier you were shown 20 items inside the Grid. </Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Please identify and select the item that was shown  </Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Select the row A,B,C,D or E in which item was shown.</Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ If you cannot remember the row please take a guess.</Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ All Questions are compulsory. After answering all qustions click on 'Next Section' Button</Text>

      <Text style={{marginTop:10,fontSize:16,color:'darkmagenta',fontWeight:'bold'}}>Try out following example...</Text>

<View style={{backgroundColor:'thistle',marginTop:10}}>
      {/*Question 1*/}
      <Text style={{fontWeight:'bold', fontSize:16}}> It has patels.</Text>

      <View style={{flexDirection:'row'}}>
      <SelectDropdown
      data={thing1}
      buttonStyle={styles.dropdown}
      buttonTextStyle={styles.dropdown1BtnTxtStyle}
      renderDropdownIcon={isOpened => {
      return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={10} />;
      }}
      defaultButtonText="Thing"
      onSelect={(selectedItem, index) => {
        if(parseInt(index) == 3)
            { 
            setScore1('Correct Thing');
          }
          else
          {
            setScore1('Wrong Thing')
          }
      }}

      buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
      rowTextForSelection={(item, index) => {return item}}
      />

      </View>
</View>

<Text style={{fontWeight:'bold', fontSize:16}}>Result:</Text>
<Text style={{ fontSize:16}}>{score1}</Text>
<Text style={{ fontSize:16}}>{score2}</Text>


      <TouchableOpacity
           style={styles.customBtnBG}
           onPress={() => navigation.navigate("RemembranceQuiz",
                                              {param18: id,
                                              quiz3_score: Lastfinal_quiz3_score,
                                              quiz3_time: LastFinal_quiz3_time})}>
           <Text style={styles.customBtnText}>Start Quiz</Text>
         </TouchableOpacity>  

            </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default MatchPatternLast;
  
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
  dropdown: {
    height: 30,
    width:120,
    borderColor: 'grey',
    borderRadius: 1,
    paddingHorizontal: 1,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:20,
    marginRight:20,
    marginTop:10,
    marginBottom:10,
    marginLeft:'auto',
    marginRight:'auto'
  },
    dropdown1BtnTxtStyle: {
    color: '#444', 
    textAlign: 'left',
    fontSize: 16,
    justifyContent:'center',
    alignItems:'center',
  }

  });
  