import * as React from 'react';
import { Button, View, Alert, Text, StyleSheet,TouchableOpacity } from 'react-native';
const Testoption = ({ navigation }) => {
   return (

    <View style={styles.container}>

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => navigation.navigate('Questionnaire', { name: 'Questionnaire' })}
        >
          <Text style={styles.customBtnText}>Questionnaire</Text>

        
        </TouchableOpacity>
                <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => navigation.navigate('LabTestPage', { name: 'LabTestPage' })}
        >
          <Text style={styles.customBtnText}>Lab Test</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => navigation.navigate('MriPage', { name: 'MriPage' })}
        >
          <Text style={styles.customBtnText}>MRI Upload</Text>
        </TouchableOpacity>
      </View>

   );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  
    /* Here style the text of your button */
      customBtnText: {
          fontSize: 20,
          fontWeight: '400',
          color: "#fff",
          justifyContent: 'center',
          alignItems: 'center',
      },
  
    /* Here style the background of your button */
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

export default Testoption;