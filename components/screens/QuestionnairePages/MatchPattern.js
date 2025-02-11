import { StyleSheet, Text, View, Image, Pressable, ScrollView,TouchableOpacity} from "react-native";
import React,{useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";

const MatchPattern = ({route}) => {
  const navigation = useNavigation();
  
const [checked, setChecked] = useState();
const [checked2, setChecked2] = useState();
const [checked3, setChecked3] = useState();
const [checked4, setChecked4] = useState();
const [checked5, setChecked5] = useState();
const [checked6, setChecked6] = useState();
const [checked7, setChecked7] = useState();
const [checked8, setChecked8] = useState();
const [checked9, setChecked9] = useState();
const [checked10, setChecked10] = useState();

const [score1, setScore1] = useState(0);
const [score2, setScore2] = useState(0);
const [score3, setScore3] = useState(0);
const [score4, setScore4] = useState(0);
const [score5, setScore5] = useState(0);
const [score6, setScore6] = useState(0);
const [score7, setScore7] = useState(0);
const [score8, setScore8] = useState(0);
const [score9, setScore9] = useState(0);
const [score10, setScore10] = useState(0);


  const [counter, setCounter] = useState(0);

  const [index, setIndex] = useState(0);
 
  var id = route.params.param12;
  var quiz3_scoreP = route.params.param13;
  var quiz3_timeP = route.params.param14;

  var final_quiz3_score1 = parseInt(score1)+parseInt(score2)+parseInt(score3)+parseInt(score4)+parseInt(score5)+parseInt(score6)+parseInt(score7)+ parseInt(score8)+ parseInt(score9)+ + parseInt(score10);
  var final_quiz3_time = parseInt(quiz3_timeP)+ parseInt(counter);
  

  var final_quiz3_score = parseInt((parseInt(final_quiz3_score1)/10)*5)
  var final_quiz3_scoref = final_quiz3_score + quiz3_scoreP;
  // interval
  let interval = null;

  // progress bar
  const progressPercentage = Math.floor((index/10) * 100);

  useEffect(() => {
    const myInterval = () => {
      if (counter < 30 ) {
        setCounter((state) => state + 1);
      }
      if(counter == 30)
      {
        clearTimeout(interval);
        navigation.navigate("MatchPatternLast", {
          param15: id,
          param16: final_quiz3_scoref,
          param17: final_quiz3_time,
        })
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
      navigation.navigate("MatchPatternLast", {
        param15: id,
        param16: final_quiz3_scoref,
        param17: final_quiz3_time,
      })
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(counter);
    }
  }, [index]);


  var quiz3_score =  (parseInt(score1)+parseInt(score2)+parseInt(score3)+parseInt(score4)+parseInt(score5)+parseInt(score6)+parseInt(score7)+ parseInt(score8)+ parseInt(score9)+ + parseInt(score10));


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
        <Text style={{fontWeight:'bold',fontSize:20,color:'darkmagenta'}}> Pattern based Quiz - 3</Text>
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







    {/*Question 1*/}
    <View style={{ marginTop: 10, flexDirection:'row' }}>
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q1_L.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
        }}
        />
        <View style={{ marginLeft: 20, flexDirection:'column' }}>
          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked === 1 ? "darkmagenta" : 'magenta',},]} 
          onPress={() => {
            setChecked(1);
            setScore1(0)
          }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Same</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked === 2 ? "darkmagenta" : 'magenta'},]}
          onPress={() => {
              setChecked(2);
              setScore1(score1+1)
           }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Different</Text>
          </Pressable>
        </View>
      
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q1_R.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
       }}
      />
    </View>


    {/*Question 2*/}
    <View style={{ marginTop: 10, flexDirection:'row' }}>
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q2_L.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
        }}
        />
        <View style={{ marginLeft: 20, flexDirection:'column' }}>
          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked2 === 1 ? "darkmagenta" : 'magenta',},]} 
          onPress={() => {
            setChecked2(1);
            setScore2(1)
          }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Same</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked2 === 2 ? "darkmagenta" : 'magenta'},]}
          onPress={() => {
              setChecked2(2);
              setScore2(0)
           }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Different</Text>
          </Pressable>
        </View>
      
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q2_R.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
       }}
      />
    </View>


    {/*Question 3*/}
    <View style={{ marginTop: 10, flexDirection:'row' }}>
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q3_L.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
        }}
        />
        <View style={{ marginLeft: 20, flexDirection:'column' }}>
          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked3 === 1 ?"darkmagenta" : 'magenta',},]} 
          onPress={() => {
            setChecked3(1);
            setScore3(1)
            console.log("Same Score2 = "+score2)
          }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Same</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked3 === 2 ? "darkmagenta" : 'magenta'},]}
          onPress={() => {
              setChecked3(2);
              setScore3(0)
              console.log("score2 = "+ score2);
           }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Different</Text>
          </Pressable>
        </View>
      
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q3_R.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
       }}
      />
    </View>


    {/*Question 4*/}
    <View style={{ marginTop: 10, flexDirection:'row' }}>
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q4_L.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
        }}
        />
        <View style={{ marginLeft: 20, flexDirection:'column' }}>
          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked4 === 1 ? "darkmagenta" : 'magenta',},]} 
          onPress={() => {
            setChecked4(1);
            setScore4(0)
            console.log("Same Score2 = "+score2)
          }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Same</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked4 === 2 ? "darkmagenta" : 'magenta'},]}
          onPress={() => {
              setChecked4(2);
              setScore4(1)
              console.log("score2 = "+ score2);
           }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Different</Text>
          </Pressable>
        </View>
      
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q4_R.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
       }}
      />
    </View>

    {/*Question 5*/}
    <View style={{ marginTop: 10, flexDirection:'row' }}>
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q5_L.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
        }}
        />
        <View style={{ marginLeft: 20, flexDirection:'column' }}>
          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked5 === 1 ? "darkmagenta" : 'magenta',},]} 
          onPress={() => {
            setChecked5(1);
            setScore5(0)
          }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Same</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked5 === 2 ? "darkmagenta" : 'magenta'},]}
          onPress={() => {
              setChecked5(2);
              setScore5(1)
           }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Different</Text>
          </Pressable>
        </View>
      
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q5_R.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
       }}
      />
    </View>

    {/*Question 6*/}
    <View style={{ marginTop: 10, flexDirection:'row' }}>
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q6_L.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
        }}
        />
        <View style={{ marginLeft: 20, flexDirection:'column' }}>
          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked6 === 1 ? "darkmagenta" : 'magenta',},]} 
          onPress={() => {
            setChecked6(1);
            setScore6(1)
          }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Same</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked6 === 2 ? "darkmagenta" : 'magenta'},]}
          onPress={() => {
              setChecked6(2);
              setScore6(0)
           }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Different</Text>
          </Pressable>
        </View>
      
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q6_R.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
       }}
      />
    </View>

    {/*Question 7 */}
    <View style={{ marginTop: 10, flexDirection:'row' }}>
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q7_L.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
        }}
        />
        <View style={{ marginLeft: 20, flexDirection:'column' }}>
          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked7 === 1 ? "darkmagenta" : 'magenta',},]} 
          onPress={() => {
            setChecked7(1);
            setScore7(0)
          }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Same</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked7 === 2 ? "darkmagenta" : 'magenta'},]}
          onPress={() => {
              setChecked7(2);
              setScore7(1)
           }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Different</Text>
          </Pressable>
        </View>
      
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q7_R.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
       }}
      />
    </View>


    {/*Question 8 */}
    <View style={{ marginTop: 10, flexDirection:'row' }}>
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q8_L.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
        }}
        />
        <View style={{ marginLeft: 20, flexDirection:'column' }}>
          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked8 === 1 ? "darkmagenta" : 'magenta',},]} 
          onPress={() => {
            setChecked8(1);
            setScore8(1)
          }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Same</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked8 === 2 ? "darkmagenta" : 'magenta'},]}
          onPress={() => {
              setChecked8(2);
              setScore8(0)
           }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Different</Text>
          </Pressable>
        </View>
      
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q8_R.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
       }}
      />
    </View>


     {/*Question 9 */}
    <View style={{ marginTop: 10, flexDirection:'row' }}>
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q9_L.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
        }}
        />
        <View style={{ marginLeft: 20, flexDirection:'column' }}>
          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked9 === 1 ? "darkmagenta" : 'magenta',},]} 
          onPress={() => {
            setChecked9(1);
            setScore9(0)
          }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Same</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked9 === 2 ? "darkmagenta" : 'magenta'},]}
          onPress={() => {
              setChecked9(2);
              setScore9(1)
           }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Different</Text>
          </Pressable>
        </View>
      
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q9_R.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
       }}
      />
    </View>


          {/*Question 10 */}
    <View style={{ marginTop: 10, flexDirection:'row' }}>
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q10_L.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
        }}
        />
        <View style={{ marginLeft: 20, flexDirection:'column' }}>
          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked10 === 1 ? "darkmagenta" : 'magenta',},]} 
          onPress={() => {
            setChecked10(1);
            setScore10(0)
          }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Same</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked10 === 2 ? "darkmagenta" : 'magenta'},]}
          onPress={() => {
              setChecked10(2);
              setScore10(1)
           }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Different</Text>
          </Pressable>
        </View>
      
      <Image
        source={ require('../../../assets/QuizOf_s_d/Q10_R.png')}style={{
        width: 60,
        height: 90,
        marginLeft: 20,
        marginTop:20,
       }}
      />
    </View>

    <Text> final Score is { quiz3_score} </Text>
    <Text> final Score till now is { final_quiz3_score} </Text>

    

          <TouchableOpacity
           style={styles.customBtnBG}
           onPress={() => {
            clearTimeout(interval);
            navigation.navigate("MatchPatternLast", {
              param15: id,
              param16: final_quiz3_scoref,
              param17: final_quiz3_time,
            })
           } 
}
           >
           <Text style={styles.customBtnText}>Next Section</Text>
         </TouchableOpacity> 
          </View>
    </ScrollView>
  );
};

export default MatchPattern;

const styles = StyleSheet.create({
  PressableStyle: {
    backgroundColor: "magenta",
    padding: 10,
    width:120,
    borderRadius: 25,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,

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


});
