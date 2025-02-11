import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  ScrollView
} from 'react-native';
import {useState, useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';



const RemembranceQuiz = ({route}) => {

  const navigation = useNavigation();
  let interval=null;
const thing1 = ["Mop","Sponge","Brush","Bucket"];
const thing2 = ["Cat","Cheetah","Kangaroo","Hare"];
const thing3 = ["Basketball","Football","Rugby Ball","Tennis Ball"];

const row = ['A','B','C','D','E'];

const [counter, setCounter] = useState(0);
const [index, setIndex] = useState(0);

 const [score1,setScore1]= useState(0);
    const [score2,setScore2]= useState(0);
    const [score3,setScore3]= useState(0);
    const [score4,setScore4]= useState(0);
    const [score5,setScore5]= useState(0);
    const [score6,setScore6]= useState(0);   
    
    var id = route.params.param18;
    var Lastfinal_quiz3_score = route.params.quiz3_score;
    var LastFinal_quiz3_time = route.params.quiz3_time;

 var f_score = parseFloat(score1)+parseFloat(score2)+parseFloat(score3)+parseFloat(score4)+parseFloat(score5)+parseFloat(score6);

 var fs = parseFloat(Lastfinal_quiz3_score)+parseFloat(f_score);
 var qt4 = parseInt(LastFinal_quiz3_time)+ parseInt(counter)

 useEffect(() => {
  const myInterval = () => {
    if (counter < 50 ) {
      setCounter((state) => state + 1);
    }
    if(counter == 50)
    {
      clearTimeout(interval);
      navigation.navigate("RemembranceQuizLast",
                                              {param19: id,
                                              quiz4_score: fs,
                                              quiz4_time: qt4})
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
    navigation.navigate("RemembranceQuizLast",
                                              {param19: id,
                                              quiz4_score: fs,
                                              quiz4_time: qt4})
  }
}, [index]);

useEffect(() => {
  if (!interval) {
    setCounter(counter);
  }
}, [index]);


  return (
    <SafeAreaView style={styles.container}>
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

        <Text style={{fontWeight:'bold',fontSize:20,color:'darkmagenta',}}> Remembrance Test - 4</Text>
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
       
          <Text> Score till now : {Lastfinal_quiz3_score}</Text> 
          <Text> Time taken : {LastFinal_quiz3_time}</Text>
          <Text> fs : {fs}</Text>
          <Text> qt4 : {qt4}</Text>

        <View>
        <View style={{backgroundColor:'thistle'}}>
        {/*Question 1*/}
        <Text style={{fontSize:16, fontWeight:'bold',marginTop:20}}> It is useful when cleaning surface.</Text>

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
       />

        </View>
        </View>

         <View style={{backgroundColor:'thistle',marginTop:20}}>

        {/*Question 2*/}
        <Text style={{fontSize:16, fontWeight:'bold',marginTop:20}}> It can move at speed</Text>
        
        <View style={{flexDirection:'row'}}>
       <SelectDropdown
              data={thing2}
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={10} />;
            }}
              defaultButtonText="Thing"
              onSelect={(selectedItem, index) => {
                if(parseInt(index) == 2)
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
       />
        </View>
        </View>

<View style={{backgroundColor:'thistle',marginTop:20}}>

{/* Question 3 */}
        <Text style={{fontSize:16, fontWeight:'bold',marginTop:20}}> Something that bounces.</Text>

        <View style={{flexDirection:'row'}}>
       <SelectDropdown
              data={thing3}
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={10} />;
            }}
              defaultButtonText="Thing"
              onSelect={(selectedItem, index) => {
                if(parseInt(index) == 3)
                    { 
                    setScore5(0.5);
                  }
                  else
                  {
                    setScore5(0)
                  }
              }}
              
              buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
              rowTextForSelection={(item, index) => {return item}}
       />

        </View>

         </View>
         <Text> your score is {f_score}</Text>


         <TouchableOpacity
           style={styles.customBtnBG}
           onPress={() =>
            {
              clearTimeout(interval)
              navigation.navigate("RemembranceQuizLast",
                                              {param19: id,
                                              quiz4_score: fs,
                                              quiz4_time: qt4})

            } }
           >
           <Text style={styles.customBtnText}>Next Section</Text>
         </TouchableOpacity>  


         </View>
         </View>
         </ScrollView>
   </SafeAreaView>
  );
};

export default RemembranceQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

  },
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
  dropdown: {
      height: 30,
      width:120,
      borderColor: 'grey',
      borderRadius: 1,
      paddingHorizontal: 1,
      borderWidth: 1,
      justifyContent:'center',
      alignItems:'center',
      paddingLeft:'auto',
      marginRight:'auto',
      marginLeft:'auto',
      marginTop:10,
      marginBottom:20,
    },
      dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left',fontSize: 16,justifyContent:'center',alignItems:'center'}


});

