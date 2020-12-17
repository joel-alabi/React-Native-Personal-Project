
import React, { Component } from "react";
import {StyleSheet,Text,TextInput,TouchableOpacity,ScrollView,View,Image} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Homepage extends Component {
  
    
    

  render() {const {navigation} = this.props
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>albums</Text>
        </View>
   <View style={styles.imageContainer}>   
<Image source={require('./assets/amber-kipp-75715CVEJhI-unsplash.jpg')} style={styles.image}/>
<Image source={require('./assets/celine-sayuri-tagami-2s6ORaJY6gI-unsplash.jpg')} style={styles.image}/>
    </View>  
    <View style={styles.imageContainer}>   
<Image source={require('./assets/erik-jan-leusink-IbPxGLgJiMI-unsplash.jpg')} style={styles.image}/>
<Image source={require('./assets/kevin-mueller-aeNg4YA41P8-unsplash.jpg')} style={styles.image}/>
    </View> 
    <View style={styles.imageContainer}>   
<Image source={require('./assets/amber-kipp-75715CVEJhI-unsplash.jpg')} style={styles.image}/>
<Image source={require('./assets/erik-jan-leusink-IbPxGLgJiMI-unsplash.jpg')} style={styles.image}/>
    </View> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 55,
    marginTop: 100,
    marginHorizontal: 20,
  },

  loginText: {
    fontSize: 50,
    color: "#b617eb",
  },

  loginTextContainer: {
    marginBottom: 30
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#58269e",
    fontSize: 20,
    height: 20,
    marginTop:70
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 2.5,
    color: "#02a6cf",
  },
  image: {
    marginRight:2,
    width: 170,
    height: 170,
    marginVertical:1,
  },
imageContainer:{
  flexDirection:'row',
  margin:2
},

  button: {
    height: 50,
    backgroundColor: "#b617eb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 27,
  },

  buttonText1: {
    color: "white",
    fontSize: 15,
    justifyContent: 'space-between'
  },

  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },

  signUpText: {
    fontSize: 16,
    color: "#b617eb",
  },
});

export default  Homepage;