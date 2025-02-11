import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Pressable,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { useRoute } from "@react-navigation/native";
  import { AntDesign } from "@expo/vector-icons";
  import GridQuiz from './GridQuiz'
  import { useNavigation } from "@react-navigation/native";
  



  const QuestionnaireResultsScreen = ({route}) => {
    const navigation = useNavigation();
    var id = route.params.param3;
    var points_quiz1 = route.params.param4;
    var time1 = route.params.param5;
    return (
      <SafeAreaView style={{ margin: 10 }}>
        <View>
          <Text> Patient ID {id}</Text>
          <Text> Score {points_quiz1}</Text>
          <Text> Time1 {time1}</Text>
          <Text style={{color:'darkmagenta',marginLeft:'auto',marginRight:'auto',marginTop:15,fontSize:20,fontWeight:'bold'}}> Section 2</Text>
          <Text style={{color:'darkmagenta',marginLeft:'auto',marginRight:'auto',marginTop:15,fontSize:24,fontWeight:'bold'}} >Grid Based Quiz</Text>
          <Text style={{fontSize:18,fontWeight:'bold',marginTop:25}}>📝 Instructions :</Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ The grid has 5 horizontal rows. </Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Each row is labelled A to E </Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Carefully watch out the grid. </Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Arranged across are 20 items.</Text>
      <Text style={{marginTop:10,fontSize:16}}>✅ Click 'Start Quiz' to continue</Text>

      <TouchableOpacity
           style={styles.customBtnBG}
           onPress={() => navigation.navigate("GridQuiz",
                                              {param6: id,
                                              param7: points_quiz1,
                                              param8: time1})}>
           <Text style={styles.customBtnText}>Start Quiz</Text>
         </TouchableOpacity>  

        </View>
          
      </SafeAreaView>
    );
  };
  
  export default QuestionnaireResultsScreen;
  
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
  });
  