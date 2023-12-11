/* ERROR  Android Bundling failed 37819ms
Unable to resolve "@react-navigation/native" from "App.js"
*/
import React from 'react';
import {useState, useContext} from 'react'
import {Text, View, Button, TextInput, ImageBackground } from 'react-native';
import {CounterContext} from "./Contexts/CounterContext";
import {CounterProvider} from "./Contexts/CounterContext";
import {NavigationContainer} from '@react-navigation/native';


export default function AppTelaTres() {

  const [nome, setNome] = useState('')
  const [isLoading, setLoading] = useState(false)
  const {counter, setCounter} = useContext(CounterContext);

  return (
    <CounterProvider>
      <ImageBackground style={{flex:1, alignItems:'center',justifyContent:'center'}}
      source={require('./assets/imgBack.jpg')}>
        <Text style={{fontSize:22}}>
          Contador
        </Text>
        <Text style={{fontSize:18}}>
          {counter}
        </Text>
        <View>
          <Button title='Clique Aqui' color='green' onPress={()=>{
              return setCounter(counter + 1);
            }}>
            </Button>
            
        <TextInput style={{fontSize:28, marginBottom:20}}
          placeholder='Digite Nome Aqui'
          onChengeText={(txt)=>setNome(txt)}>
        </TextInput>
        <Text style={{fontSize:18}}>
          Nome Digitado: {nome}
        </Text></View>
      </ImageBackground>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Tela Um' component={App} options={{ title: 'Tela Um' }}></Tab.Screen>
        <Tab.Screen name='Tela Dois' component={AppTelaDois} options={{ title: 'Tela Dois' }}></Tab.Screen>
        <Tab.Screen name='Tela Tres' component={AppTelaTres} options={{ title: 'Tela Três' }}></Tab.Screen>
      </Tab.Navigator>
      </NavigationContainer>
  </CounterProvider>
    );
  }