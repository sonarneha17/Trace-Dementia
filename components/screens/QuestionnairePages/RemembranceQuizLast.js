import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Image,
    ScrollView,
    TouchableOpacity
  } from "react-native";
  import React,{useState,useEffect} from "react";
  import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useNavigation } from "@react-navigation/native";

import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


  const RemembranceQuizLast = ({route}) => 
  {

    const navigation = useNavigation();



    var id = route.params.param19;
    var final_quiz4_score = route.params.quiz4_score;
    var final_quiz4_time = route.params.quiz4_time;



    const [score1,setScore1]= useState();
    const [score2,setScore2]= useState();
    const [score3,setScore3]= useState();
    const countries = ["A","B","C"];





    var state = {
      HeadTable: 
      [

                  <Image
                    source={ require('../../../assets/QuizOFShapes/square.png')}style={{
                      width: 30,
                      height: 40,
                      marginLeft: 10,
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/circle.png')}style={{
                      width: 40,
                      height: 40,
                      marginLeft: 10,
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/traingle.png')}style={{
                      width: 34,
                      height: 40,
                      marginLeft: 10,
                    }}
                  />],
      DataTable: [
    
        ['A', 'B', 'C'],

      ],
       DataTable1: [
    
        [''],
        [''],

      ],

            DataTable2:[
                [
                  <Image
                    source={ require('../../../assets/QuizOFShapes/circle.png')}style={{
                      width: 35,
                      height: 40,
                      marginLeft: 10,
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/traingle.png')}style={{
                      width: 30,
                      height: 40,
                      marginLeft: 10,
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/square.png')}style={{
                      width: 30,
                      height: 40,
                      marginLeft: 10,
                    }}
                  />, 
 
                  ],

                  [      <SelectDropdown
              data={countries}
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={10} />;
            }}
              defaultButtonText="Ans"
              onSelect={(selectedItem, index) => {
                if(parseInt(index) == 1)
                  { 
                    setScore1('Correct');
                  }
                  else
                  {
                    setScore1('Wrong')
                  }
              }}
              
              buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
              rowTextForSelection={(item, index) => {return item}}
       />,  <SelectDropdown
              data={countries}
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={10} />;
            }}
              defaultButtonText="Ans"
              onSelect={(selectedItem, index) => {
                if(parseInt(index) == 2)
                    { 
                    setScore2('Correct');
                  }
                  else
                  {
                    setScore2('Wrong')
                  }
              }}
              
              buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
              rowTextForSelection={(item, index) => {return item}}
       />,  <SelectDropdown
              data={countries}
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={10} />;
            }}
              defaultButtonText="Ans"
              onSelect={(selectedItem, index) => {
                if(parseInt(index) == 0)
                    { 
                    setScore3('Correct');
                  }
                  else
                  {
                    setScore3('Wrong')
                  }
              }}
              
              buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
              rowTextForSelection={(item, index) => {return item}}
       />,  
      ]
            ]
      
      }


    return (
      <SafeAreaView style={{ margin: 10 }}>
        <ScrollView>   

        <Text> Patient ID : {id}</Text>  
          <Text> Score till now : {final_quiz4_score}</Text> 
          <Text> Time taken : {final_quiz4_time}</Text> 

      <Text style={{color:'darkmagenta',marginLeft:'auto',marginRight:'auto',marginTop:15,fontSize:20,fontWeight:'bold'}}> Section 5</Text>
      <Text style={{color:'darkmagenta',marginLeft:'auto',marginRight:'auto',marginTop:15,fontSize:24,fontWeight:'bold'}} >Symbol Matching Test</Text>
      <Text style={{fontSize:18,fontWeight:'bold',marginTop:25}}>📝 Instructions :</Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ In this section you will see 5 symbols labelled A to E </Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Below the label there are 15 symbols </Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Please use the dropdown menu to select the correct label for each symbol.</Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Do as many as you can in 50 </Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Do not miss any question. After answering all qustions click on 'Next Section' Button</Text>


      <Text style={{marginTop:10,marginBottom:10,fontSize:16,color:'darkmagenta',fontWeight:'bold'}}>Try out following example...</Text>
      
      <Table borderStyle={{borderWidth: 1, borderColor: 'grey', justifyContent:'center',   alignContent:'center',}}>
                <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                <Rows data={state.DataTable} textStyle={styles.TableText}/>
              </Table>
      
                    <Table borderStyle={{borderWidth: 0, justifyContent:'center',   alignContent:'center',}}>
                
                <Rows data={state.DataTable1} textStyle={styles.TableText}/>
              </Table>
      
              <Table borderStyle={{borderWidth: 1, borderColor: 'grey', justifyContent:'center',   alignContent:'center',}}>
                
                <Rows data={state.DataTable2} textStyle={styles.TableText}/>
              </Table>
      
      <View style={{flexDirection:'row'}}>
      <Text style={styles.textStyle1}>{score1}</Text>
      <Text style={styles.textStyle1}>{score2}</Text>
      <Text style={styles.textStyle1}>{score3}</Text>
      </View>

      <TouchableOpacity
           style={styles.customBtnBG}
           onPress={() => navigation.navigate("ShapeQuiz",{
            param_id:id,
            param_quiz4_score: final_quiz4_score,
            param_quiz4_time: final_quiz4_time,
           })}
           >
           <Text style={styles.customBtnText}>Start Quiz</Text>
         </TouchableOpacity> 






            </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default RemembranceQuizLast;
  
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
  HeadStyle: { 
    height: 50,
    justifyContent: 'center',
    alignContent: "center",  
    marginLeft: "auto",
    marginRight: "auto", 
  },
  TableText: { 
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft:'auto',
    marginRight:'auto',
  },
  dropdown: {
      height: 30,
      width:64,
      borderColor: 'grey',
      borderRadius: 1,
      paddingHorizontal: 1,
      borderWidth: 1,
    },
      dropdown1BtnTxtStyle: {
        color: '#444', 
        textAlign: 'left',
        fontSize: 14},


textStyle1: {
  padding:20,
  marginLeft:10,
  color:'darkmagenta',
  fontWeight:'bold',
  fontSize:16
}


  });
  