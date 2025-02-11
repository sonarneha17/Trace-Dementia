// App.js
import React, { Component,useState, useEffect } from 'react';
import { StyleSheet, View,Image, Text,Pressable,TouchableOpacity} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


      
const ShapeQuiz = ({route}) => { 

    const navigation = useNavigation();

    const [score1,setScore1]= useState(0);
    const [score2,setScore2]= useState(0);
    const [score3,setScore3]= useState(0);
    const [score4,setScore4]= useState(0);
    const [score5,setScore5]= useState(0);
    const [score6,setScore6]= useState(0);
    const [score7,setScore7]= useState(0);
    const [score8,setScore8]= useState(0);
    const [score9,setScore9]= useState(0);
    const [score10,setScore10]= useState(0);
    const [score11,setScore11]= useState(0);
    const [score12,setScore12]= useState(0);
    const [score13,setScore13]= useState(0);
    const [score14,setScore14]= useState(0);
    const [score15,setScore15]= useState(0);
    var f_score=0;
    const countries = ["A","B","C","D","E"];
    const [counter, setCounter] = useState(0);
    const [index, setIndex] = useState(0);
    let interval =null;

    var id = route.params.param_id;
    var quiz4_score = route.params.param_quiz4_score;
    var quiz4_time = route.params.param_quiz4_time;

    var f_score = parseInt(score1) + parseInt(score2) + parseInt(score3) +  parseInt(score4) + parseInt(score5) + parseInt(score6) + parseInt(score7) + parseInt(score8) + parseInt(score9) + parseInt(score10) + parseInt(score11) + parseInt(score12)+ parseInt(score13) + parseInt(score14) + parseInt(score15)
    var finalQ5Score = ((parseInt(f_score)/15)*5);

    var quiz5_time = parseInt(quiz4_time)+parseInt(counter);
    var quiz5_score = parseInt(quiz4_score)+parseInt(finalQ5Score)

    
    useEffect(() => {
      const myInterval = () => {
        if (counter < 80 ) {
          setCounter((state) => state + 1);
        }
        if(counter==80)
        {
          clearTimeout(interval);
          navigation.navigate("ShapeQuizLast",
          {
           p_id: id,
           param_quiz5_score:quiz5_score,
           param_quiz5_time:quiz5_time,
          }
          )
        }
      };
    
      interval = setTimeout(myInterval, 1000);
    
      // clean up
      return () => {
        clearTimeout(interval);
      };
    }, [counter]);
    
    useEffect(() => {
      if (index + 1 > 10) {
        clearTimeout(interval)
        navigation.navigate("ShapeQuizLast",
        {
         p_id: id,
         param_quiz5_score:quiz5_score,
         param_quiz5_time:quiz5_time,
        }
        )
      }
    }, [index]);
    
    useEffect(() => {
      if (!interval) {
        setCounter(counter);
      }
    }, [index]);
    
    var state = {
      HeadTable: 
      [<Image
                    source={ require('../../../assets/QuizOFShapes/downarrow.png')}style={{
                      width: 30,
                      height: 40,
                      marginLeft: 10,
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/crossCircle.png')}style={{
                      width: 35,
                      height: 40,
                      marginLeft: 10,
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/upArrow.png')}style={{
                      width: 30,
                      height: 40,
                      marginLeft: 10,
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/leftUpArrow.png')}style={{
                      width: 40,
                      height: 40,
                      marginLeft: 10,
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/plusCircle.png')}style={{
                      width: 34,
                      height: 40,
                      marginLeft: 10,
                    }}
                  />],
      DataTable: [
    
        ['A', 'B', 'C', 'D', 'E'],

      ],

            DataTable1: [
    
        [''],
        [''],

      ],

      DataTable2:[
                [
                  <Image
                    source={ require('../../../assets/QuizOFShapes/crossCircle.png')}style={{
                      width: 35,
                      height: 40,
                      marginLeft:'auto',
                      marginRight:'auto'

                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/upArrow.png')}style={{
                      width: 30,
                      height: 40,
                      marginLeft:'auto',
                      marginRight:'auto'
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/downarrow.png')}style={{
                      width: 30,
                      height: 40,
                      marginLeft:'auto',
                      marginRight:'auto'
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
                    setScore1(1);
                  }
                  else
                  {
                    setScore1(0)
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
                    setScore2(1);
                  }
                  else
                  {
                    setScore2(0)
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
                    setScore3(1);
                  }
                  else
                  {
                    setScore3(0)
                  }
              }}
              
              buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
              rowTextForSelection={(item, index) => {return item}}
       />,  ],
                       
                       
          [''],             
                       
                        [<Image
                    source={ require('../../../assets/QuizOFShapes/plusCircle.png')}style={{
                      width: 30,
                      height: 40,
                      marginLeft:'auto',
                      marginRight:'auto'
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/leftUpArrow.png')}style={{
                      width: 35,
                      height: 40,
                      marginLeft:'auto',
                      marginRight:'auto'
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/crossCircle.png')}style={{
                      width: 30,
                      height: 40,
                      marginLeft:'auto',
                      marginRight:'auto'
                    }}
                  />, ],





              [      <SelectDropdown
              data={countries}
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={10} />;
            }}
              defaultButtonText="Ans"
              onSelect={(selectedItem, index) => {
                if(parseInt(index) == 4)
                    { 
                    setScore6(1);
                  }
                  else
                  {
                    setScore6(0)
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
                if(parseInt(index) == 3)
                    { 
                    setScore7(1);
                  }
                  else
                  {
                    setScore7(0)
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
                if(parseInt(index) == 1)
                    { 
                    setScore8(1);
                  }
                  else
                  {
                    setScore8(0)
                  }
              }}
              
              buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
              rowTextForSelection={(item, index) => {return item}}
       />,  ],


       [''],

                                [<Image
                    source={ require('../../../assets/QuizOFShapes/downarrow.png')}style={{
                      width: 30,
                      height: 40,
                      marginLeft:'auto',
                      marginRight:'auto'
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/leftUpArrow.png')}style={{
                      width: 35,
                      height: 40,
                      marginLeft:'auto',
                      marginRight:'auto'
                    }}
                  />, 
                  <Image
                    source={ require('../../../assets/QuizOFShapes/upArrow.png')}style={{
                      width: 30,
                      height: 40,
                      marginLeft:'auto',
                      marginRight:'auto'
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
                if(parseInt(index) == 0)
                    { 
                    setScore11(1);
                  }
                  else
                  {
                    setScore11(0)
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
                if(parseInt(index) == 3)
                    { 
                    setScore12(1);
                  }
                  else
                  {
                    setScore12(0)
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
                    setScore13(1);
                  }
                  else
                  {
                    setScore13(0)
                  }
              }}
              
              buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
              rowTextForSelection={(item, index) => {return item}}
       />,  ],



      ]



    }


    return (
      <ScrollView>
  <View>
      <View style={{backgroundColor:"#F0F8FF", marginBottom:20}}>
<View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      > 

        <Text style={{fontWeight:'bold',fontSize:20,color:'darkmagenta'}}> Symbol Matching Test - 4</Text>
        <Pressable
          style={{ padding: 10, backgroundColor: "magenta", borderRadius: 20 }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            {counter}
          </Text>
        </Pressable>

       </View>
       <Text style={{fontWeight:'bold',marginBottom:20,marginLeft:12}}> Patient ID : {id}</Text> 
      </View>


      <Text> Patient ID : {id}</Text>  
          <Text> Score till now : {quiz4_score}</Text> 
          <Text> Time taken : {quiz4_time}</Text> 
          <Text> quiz 5 score : {quiz5_score}</Text> 



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

        <Text style={{marginTop: 15}}> final score {f_score}  </Text>
        <Text style={{marginTop: 15}}> Conversion out of 5 is {parseInt(finalQ5Score)}  </Text>
        

        <TouchableOpacity
           style={styles.customBtnBG}
           onPress={() => 
            {
              clearTimeout(interval)
              navigation.navigate("ShapeQuizLast",
           {
            p_id: id,
            param_quiz5_score:quiz5_score,
            param_quiz5_time:quiz5_time,
           }
           )

            }}
           >
           <Text style={styles.customBtnText}>Next Section</Text>
         </TouchableOpacity> 


      </View>
      </ScrollView>
    );

 }



const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
   
  },
  TableText: { 
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  dropdown: {
      height: 30,
      width:64,
      borderColor: 'grey',
      borderRadius: 1,
      paddingHorizontal: 1,
      borderWidth: 1,
      marginLeft:'auto',
      marginRight:'auto'
    },
      dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left',fontSize: 14},
      customBtnBG: {
        flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
         marginLeft: "auto",
         marginRight: "auto",
         backgroundColor: "darkmagenta",
         marginTop: 30,
         marginBottom: 30,
         width : 210,
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

});
export default ShapeQuiz;