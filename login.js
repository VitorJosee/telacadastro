import React from 'react';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

 

  
  return (
    <View style={styles.container}>
      <StatusBar hidden />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  TextInput:{
    width: '100%',
    height:10,
    backgroundColor:'white', 
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10
  },
  paragraph: {
    marginBottom: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },
  textr:{
   color:'white',
   textAlign:'center',
   fontSize: 20,
   marginBottom:20,
   marginTop:20
  },
  botao:{
    width:'100%',
    height:40,
    backgroundColor:'#808080',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10,
    justifyContent:'center'
  }

});
