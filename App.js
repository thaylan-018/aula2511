import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';



function enviar(){

  alert('Você clicou no botão!');

}

export default function App() {

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>Segunda Aplicação</Text>

      <TextInput style={styles.campo}></TextInput>

      <TouchableOpacity style={styles.botao} onPress={enviar}>

        <Text style={styles.textobotao}>Mostrar</Text>

      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>

  );

}
const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    //alignItems: 'center',

    //justifyContent: 'center',

  },

titulo:{

  fontSize: 30,

  textAlign: 'center',

  marginTop: 15,

  color: '#800000'



},



campo:{

  backgroundColor: '#FFA07A',

  fontSize: 20,

  margin: 15,

  padding: 10,

  color: '#FFF',

  borderRadius: 20

},



botao:{

  backgroundColor: '#800000',

  margin: 15,

  alignItems: 'center',

  padding: 10,

  borderRadius: 20

},



textobotao:{

  color: 'FFF',

  fontSize: 25

}

});