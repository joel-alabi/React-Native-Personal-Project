
    import React from 'react'
    import { StyleSheet, View,Text, TouchableOpacity } from 'react-native';
    
    export default function Setting() {
        return (
            
                <View style={styles.heading}>
                <Text style={styles.headingext}>SETTINGS ADDED SOON</Text>
                
            </View>
            
        )
    }
    const styles = StyleSheet.create({
        heading: {
          flex: 1,
          justifyContent:'center',
          backgroundColor:'white',
          alignItems:'center'
        },
        headingext:{
            fontSize:25,
            color:'black',
            fontWeight:'bold'
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
            color: "#b617eb",
            fontSize: 20,
          },
      });
