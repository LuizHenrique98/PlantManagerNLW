
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { 
  View,
  Text, 
  Image, 
  StyleSheet, 
  Dimensions,
  SafeAreaView, 
  TouchableOpacity   
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather'

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){
  const navigation = useNavigation<any>();

  function handleStart(){    
    navigation.navigate('UserIdentification');
  }

  return(
    <SafeAreaView style={styles.container} >

      <View style={styles.wrapper}>
       
        <Text style= {styles.title}> Gerencie {'\n'} suas plantas de {'\n'} forma fácil </Text>

        <Image 
          style={styles.image} 
          source={wateringImg}
          resizeMode= "contain"
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
        </Text>   

        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.7} 
          onPress={handleStart}             
        >

          <Icon 
            name="chevron-right"
            style={styles.buttonIcon}          
          />    

        </TouchableOpacity>

      </View>  

    </SafeAreaView>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1   
    },
    wrapper: {
      flex: 1,  
      alignItems: 'center',
      paddingHorizontal: 20,      
      justifyContent: 'space-around'      
    },
    title: {      
      fontSize: 32,
      marginTop: 38,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,      
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      paddingHorizontal: 20,      
      color: colors.heading  
    },
    image: {      
      height: Dimensions.get('window').width * 0.7
    },
    button: {
      width: 56,     
      height: 56,
      borderRadius: 16,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.green         
    },
    buttonIcon: {
      fontSize: 32,
      color: colors.white      
    }    
  });