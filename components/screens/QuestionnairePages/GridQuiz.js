import { StyleSheet,Image, Text, SafeAreaView, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import grid_questions from "../data/grid_questions";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import GridQuizLast from './GridQuizLast';
import { useRoute } from "@react-navigation/native";


const GridQuiz = ({route}) => {
  const navigation = useNavigation();
  const grid_data = grid_questions;
  const totalGridQuestions = grid_data.length;
  var id = route.params.param6;
  var quiz1_score = route.params.param7;
  var quiz1_time = route.params.param8;

  // points
  const [gridpoints, setGridpoints] = useState(0);

  // index of the question
  const [gridindex, setGridindex] = useState(0);

  // answer Status (true or false)
  const [gridanswerStatus, setGridAnswerStatus] = useState(null);

  const [gridscore,setGridscore] = useState(0);
  // answers
  const [gridanswers, setGridAnswers] = useState([]);

  // selected answer
  const [gridselectedAnswerIndex, setGridSelectedAnswerIndex] = useState(null);

  // Counter
  const [gridcounter, setGridCounter] = useState(0);

  var final_quiz2_score = parseInt(quiz1_score)+ parseInt(gridscore);
  var final_quiz2_time = parseInt(quiz1_time)+ parseInt(gridcounter);

  // interval
  let gridinterval = null;

  // progress bar
  const gridprogressPercentage = Math.floor((gridindex/totalGridQuestions) * 100);

  useEffect(() => {
    if (gridselectedAnswerIndex !== null) {
      if (gridselectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setGridpoints((gridpoints) => gridpoints + 10);
        setGridscore((gridscore)=>currentQuestion.score + gridscore);
        setGridAnswerStatus(true);
        gridanswers.push({ question: gridindex + 1, answer: true });
      } else {
        setGridAnswerStatus(false);
        gridanswers.push({ question: gridindex + 1, answer: false });
      }
    }
  }, [gridselectedAnswerIndex]);

  useEffect(() => {
    setGridSelectedAnswerIndex(null);
    setGridAnswerStatus(null);
  }, [gridindex]);

  useEffect(() => {
    const myInterval = () => {
      if (gridcounter <60 ) {
        setGridCounter((state) => state + 1);
      }
      if(gridcounter==60)
      {
        clearTimeout(gridinterval);
        navigation.navigate("GridQuizLast", {
          param9: id,
          param10: final_quiz2_score,
          param11: final_quiz2_time,

        })
      }
    };

    gridinterval = setTimeout(myInterval, 1000);

    // clean up
    return () => {
      clearTimeout(gridinterval);
    };
  }, [gridcounter]);

  useEffect(() => {
    if (gridindex + 1 > grid_data.length) {
      clearTimeout(gridinterval)
      navigation.navigate("GridQuizLast", {
        param9: id,
        param10: final_quiz2_score,
        param11: final_quiz2_time,

      })
    }
  }, [gridindex]);

  useEffect(() => {
    if (!gridinterval) {
      setGridCounter(gridcounter);
    }
  }, [gridindex]);


  const currentQuestion = grid_data[gridindex];
  console.log(gridanswerStatus)

  return (
    <SafeAreaView>
      <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      > 
        <Text style={{fontWeight:'bold',fontSize:20,color:'darkmagenta'}}> Grid based Quiz - 2</Text>
        <Pressable
          style={{ padding: 10, backgroundColor: "magenta", borderRadius: 20 }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            {gridcounter}
          </Text>
        </Pressable>
       
      </View>

      <View
>
<Text style={{marginLeft:13,fontWeight:'bold'}}> Patient ID : {id}</Text>

        <Text>
          ({gridindex}/{totalGridQuestions}) questions answered
        </Text>
       
      </View>

      {/* Progress Bar */}
      <View
          style={{
            backgroundColor: "white",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            height: 10,
            borderRadius: 20,
            justifyContent: "center",
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: "#FFC0CB",
              borderRadius: 12,
              position: "absolute",
              left: 0,
              height: 10,
              right: 0,
              width: `${gridprogressPercentage}%`,
              marginTop: 20,
            }}
          />
        </View>

      <View
        style={{
          marginTop: 30,
          backgroundColor: "#F0F8FF",
          padding: 10,
          borderRadius: 6,
        }}
      >
        <View>
          {currentQuestion?.question}
          <Text style={{marginTop: 10, fontSize: 16, fontWeight:'bold'}}> {currentQuestion?.question_title}</Text>
        </View>
        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((item, gridindex) => (
            <Pressable
              onPress={() =>
                gridselectedAnswerIndex === null && setGridSelectedAnswerIndex(gridindex)
              }
              style={
                gridselectedAnswerIndex === gridindex &&
              gridindex === currentQuestion.correctAnswerIndex
                  ? {
                      flex:1,
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "navy",
                      marginVertical: 10,
                      backgroundColor: "mediumorchid",
                      borderRadius: 20,
                    }
                  : gridselectedAnswerIndex != null && gridselectedAnswerIndex === gridindex
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "navy",
                      marginVertical: 10,
                      backgroundColor: "mediumorchid",
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "navy",
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {  (
                <Text
                  style={{
                    borderColor: "navy",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {item.options}
                </Text>
              )}

              <Text style={{ marginLeft: 10 }}>{item.answer}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={
          gridanswerStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: "#F0F8FF",
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >

        {gridindex + 1 >= grid_questions.length || gridcounter == 60? (
          <Pressable
            onPress={() =>{
              clearTimeout(gridinterval);
              navigation.navigate("GridQuizLast", {
                param9: id,
                param10: final_quiz2_score,
                param11: final_quiz2_time,

              })}
            }
            style={{
              height: 50,
              backgroundColor: "darkmagenta",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent:'center',
              marginTop: 10,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white",fontWeight:'bold' }}>Next Section</Text>
          </Pressable>
        ) : gridanswerStatus === null ? null : (
          <Pressable
            onPress={() => setGridindex(gridindex + 1)}
            style={{
              height: 50,
              backgroundColor: "darkmagenta",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent:'center',
              marginTop: 10,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white", fontWeight:'bold'}}>Next Question</Text>
          </Pressable>
        )}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GridQuiz;

const styles = StyleSheet.create({});

  

  