import React from 'react'
import {ImageBackground, StyleSheet, View,Text, TouchableOpacity } from 'react-native';


export default function newPage({navigation}) {
    return (
        <View style={styles.heading}>
        
            <Text style={styles.headingext}>NUNGUA CELESTIAL BRASS BAND</Text>
            <TouchableOpacity 
            onPress={()=>{
        navigation.navigate("Album")
      }}
            style={styles.button}>
            <Text style={styles.buttonText}>Join Us</Text>
          </TouchableOpacity>
       
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
      flex: 1,
      justifyContent:'center',
      backgroundColor:'#b617eb',
      alignItems:'center'
    },
    headingext:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        marginLeft:20
    },
    button: {
        marginTop:30,
        height: 40,
        width:90,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        
         
      },
      buttonText: {
        color: "violet",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
   
      },
  });
  