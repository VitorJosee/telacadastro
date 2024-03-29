import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () =>{
    alert (nome);
    alert(email);
    alert(senha);  
  }
  
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      <Image style={{width:256,height:256}} source={require('./assets/wz2.ico')}/>

      <Text style={styles.paragraph}>Nome:</Text>
      <TextInput style={styles.TextInput} onChangeText={text=>setNome(nome)} />
      <Text style={styles.paragraph}>Email:</Text>
      <TextInput style={styles.TextInput} onChangeText={text=>setEmail(email)} />
      <Text style={styles.paragraph}>Senha:</Text>
      <TextInput secureTextEntry={true} style={styles.TextInput} onChangeText={text=>setSenha(senha)} /> 

      <TouchableOpacity style={styles.botao} onPress={()=>cadastro()}>
        <Text style={styles.textr}>CADASTRAR!</Text>
      </TouchableOpacity>

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
