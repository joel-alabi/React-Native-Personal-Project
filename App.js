
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Homepage from './homePage';
import NewPage from './NewPage';
import Notification from './src/Notification';
import Setting from './src/Setting';

const Tab = createBottomTabNavigator(); 

export default function App() {
  return (

<NavigationContainer>

     <Tab.Navigator  >

      <Tab.Screen
      options={{
        
          
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="gray" size={30}/>
          ),
        }}
        
       name="Home" component={NewPage} />


      <Tab.Screen
       options={{
        
          tabBarIcon: () => (
            
            <Ionicons name="albums" size={30} color="gray" />
          ),
      
        }}
       name="Album" component={Homepage} />

<Tab.Screen 
       options={{
         
          tabBarIcon: () => (
            
            <Entypo name="chat" size={30} color="gray" />
          ),
      
        }}
      name="Chat" component={Notification} />


      

<Tab.Screen 
       options={{
          
          tabBarIcon: () => (
            
            <AntDesign name="setting" size={30} color="gray" />
          ),
      
        }}
      name="Settings" component={Setting} />

      

    </Tab.Navigator>

    </NavigationContainer>
    
  );
   
}

function Root() {
  return (
    <Stack.Navigator>
      
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
