// components/signup.js

import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, TextInput, Button, Alert, ActivityIndicator,TouchableOpacity } from 'react-native';
import firebase from '../database/firebase';
import { db } from '../components/screens/PatientPages/config';
 
import { collection, addDoc } from "firebase/firestore"; 



export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 

      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message })) 
      

      //code for seperate collection
      try {
        const docRef = addDoc(collection(db, this.state.email), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}> 

            <Image
        source={ require('../assets/dementia(font-and-bg).png')}
        style={{
          width: 180,
          height: 180,
          borderRadius: 30,
          marginLeft: 50,
          marginTop: 0.5,
          }}
          />  
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   

          <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => this.registerUser()}>
          <Text style={styles.customBtnText}>SignUp</Text>
        </TouchableOpacity>


        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>                          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: 'darkmagenta',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  customBtnText: {
    fontSize: 20,
    fontWeight: '400',
    color: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
},

customBtnBG: {
justifyContent: 'center',
alignItems: 'center',
marginLeft:70,
backgroundColor: "darkmagenta",
marginTop: 30,
width : 150,
height: 60,
paddingHorizontal: 30,
paddingVertical: 5,
borderRadius: 30
}
});