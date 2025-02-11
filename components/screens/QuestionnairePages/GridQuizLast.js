import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Pressable,
    ScrollView,
    Image,
    TouchableOpacity
  } from "react-native";
  import React,{useState} from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { AntDesign } from "@expo/vector-icons";
  import MatchPattern from './MatchPattern';

  

  const GridQuizLast = ({route}) => {

    const navigation = useNavigation();
    const [checked, setChecked] = useState();
const [checked2, setChecked2] = useState();

const [score1, setScore1] = useState();



    var id = route.params.param9;
    var quiz2_score = route.params.param10;
    var quiz2_time = route.params.param11;
    // console.log(route.params);
    return (
      <SafeAreaView style={{ margin: 10 }}>
        <ScrollView>

        <Text> Test Screen</Text>   
          <Text> Patient ID : {id}</Text>  
          <Text> Score till now : {quiz2_score}</Text> 
          <Text> Time taken : {quiz2_time}</Text> 


      <Text style={{color:'darkmagenta',marginLeft:'auto',marginRight:'auto',marginTop:15,fontSize:20,fontWeight:'bold'}}> Section 3</Text>
      <Text style={{color:'darkmagenta',marginLeft:'auto',marginRight:'auto',marginTop:15,fontSize:24,fontWeight:'bold'}} >Pattern Based Quiz</Text>
      <Text style={{fontSize:18,fontWeight:'bold',marginTop:25}}>📝 Instructions :</Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ In this test you will be asked to determine whether two patterns are same or different </Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ If two patterns are same, click 'Same', If two patterns are different, click 'Different', </Text>
      <Text style={{marginTop:10,fontSize:16}}>Try out following example...</Text>

      <View style={{ marginTop: 10, flexDirection:'row' }}>
      <Image
        source={ require('../../../assets/QuizOf_s_d/eg1_L.png')}style={{
        width: 60,
        height: 70,
        marginLeft: 20,
        marginTop:20,
        }}
        />
        <View style={{ marginLeft: 20, flexDirection:'column' }}>
          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked === 1 ? "darkmagenta" : 'magenta',},]} 
          onPress={() => {
            setChecked(1);
            setScore1('Correct')
          }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Same</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked === 2 ? "darkmagenta" : 'magenta'},]}
          onPress={() => {
              setChecked(2);
              setScore1('Wrong')
           }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Different</Text>
          </Pressable>
        </View>
      
      <Image
        source={ require('../../../assets/QuizOf_s_d/eg1_R.png')}style={{
        width: 60,
        height: 70,
        marginLeft: 20,
        marginTop:20,
       }}
      />
    </View>
    <Text style={{marginTop:20,fontSize:20}}> Your answer is - {score1}</Text>


    <TouchableOpacity
           style={styles.customBtnBG}
           onPress={() => navigation.navigate("MatchPattern",
                                              {param12: id,
                                              param13: quiz2_score,
                                              param14: quiz2_time})}>
           <Text style={styles.customBtnText}>Start Quiz</Text>
         </TouchableOpacity>  

        </ScrollView>  
      </SafeAreaView>
    );
  };
  
  export default GridQuizLast;
  
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
  });
  