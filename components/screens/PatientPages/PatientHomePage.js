import * as React from 'react';
import { Button, View, Alert, Text, StyleSheet,SafeAreaView, TouchableOpacity } from 'react-native';

const PatientHomePage = ({ navigation }) => {
   return (

    <SafeAreaView style={styles.container}>

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => navigation.navigate('AddPatient', { name: 'AddPatient' })}>
          <Text style={styles.customBtnText}>AddPatient</Text>
        </TouchableOpacity>

          <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => navigation.navigate('SearchPatient', { name: 'SearchPatient' })}>
          <Text style={styles.customBtnText}>SearchPatient</Text>
          </TouchableOpacity>

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => navigation.navigate('UpdatePatient', { name: 'UpdatePatient' })}>
          <Text style={styles.customBtnText}>UpdatePatient</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => navigation.navigate('DeletePatient', { name: 'DeletePatient' })}>
          <Text style={styles.customBtnText}>DeletePatient</Text>
        </TouchableOpacity>

      </SafeAreaView>

   );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
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
      backgroundColor: "darkmagenta",
      marginTop: 40,
      width : 200,
      height: 70,
      paddingHorizontal: 30,
      paddingVertical: 5,
      borderRadius: 30
      }
  });

export default PatientHomePage;