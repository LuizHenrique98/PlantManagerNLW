import React, {useState} from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { Button } from '../components/Button';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){
  return(
    <SafeAreaView style={style.container} >
      <Text style= {style.title}> 
        Gerencie {'\n'} suas plantas {'\n'} de forma fácil
      </Text>

      <Image style={style.image} source={wateringImg}/>

      <Text style={style.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      
      <Button title='>'/>
      
    </SafeAreaView>

  )
}

  const style = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,
      marginTop: 38
    },
    subtitle: {
      textAlign: 'center',
      fontSize: 18,
      paddingHorizontal: 20,
      color: colors.heading  
    },
    image: {
      width: 292,
      height: 284
    }
  })