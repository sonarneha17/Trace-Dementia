import { StyleSheet,Image, Text, SafeAreaView, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import QuestionnaireResultsScreen from './QuestionnaireResultsScreen';
import { useRoute } from "@react-navigation/native";




const QuestionnaireQuizScreen = ({route}) => {
  const navigation = useNavigation();
  const data = questions;
  const totalQuestions = data.length;

  // points
  const [points, setPoints] = useState(0);

  // index of the question
  const [index, setIndex] = useState(0);

  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  const [score,setScore] = useState(0);
  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Counter
  const [counter, setCounter] = useState(0);

  // interval
  let interval = null;
  var id = route.params.param1;

  // progress bar
  const progressPercentage = Math.floor((index/totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setScore((score)=>currentQuestion.score + score);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter <60 ) {
        setCounter((state) => state + 1);
      }
      if(counter==60)
      {
        clearTimeout(interval);
        navigation.navigate("QuestionnaireResultsScreen", {
          param3: id,
          param4: score,
          param5: counter,
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
    if (index + 1 > data.length) {
      clearTimeout(interval)
      navigation.navigate("QuestionnaireResultsScreen", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(counter);
    }
  }, [index]);





  const currentQuestion = data[index];
  console.log(answerStatus)

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
        <Text style={{fontWeight:'bold',fontSize:20,color:'darkmagenta'}}> Basic Quiz Challenge - 1</Text>
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

      <View>
      <Text style={{marginLeft:13,fontWeight:'bold'}}> Patient ID : {route.params.param1}</Text>
        <Text style={{marginLeft:13}}>
          ({index}/{totalQuestions}) questions answered
        </Text>
        {/*<Text>
          {score} achieved
      </Text>*/}
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
              width: `${progressPercentage}%`,
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
        <Text style={{fontSize: 18,fontWeight:'bold'}}>
          {currentQuestion?.question} 
        </Text>
        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              style={
                selectedAnswerIndex === index &&
              index === currentQuestion.correctAnswerIndex
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
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
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
          answerStatus === null
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

        {index + 1 >= questions.length || counter == 60? (
          <Pressable
            onPress={() =>{
              clearTimeout(interval);
              navigation.navigate("QuestionnaireResultsScreen", {
                param3: id,
                param4: score,
                param5: counter,
              })
            }
            }
            style={{
              backgroundColor: "darkmagenta",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 10,
              borderRadius: 6,
              justifyContent:'center',
              height: 50,
            }}
          >
            <Text style={{ color: "white" }}>Next Section</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
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
            <Text style={{ color: "white",fontWeight:'bold' }}>Next Question</Text>
          </Pressable>
        )}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuestionnaireQuizScreen;

const styles = StyleSheet.create({});
