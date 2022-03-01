import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,  
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button } from '../components/Button'; 

import colors from '../styles/colors';

export function UserIdentification(){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation<any>();
  
  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!name);
  }
  
  function handleInputFocus(){
    setIsFocused(true);    
  }

  function handleInputChange(value: string){
    setIsFilled(!!value);
    setName(value);
  }

  function handleSubmit(){
    navigation.navigate('Confirmation');
  }

  return(
    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} > 

        <View style={styles.content}>

          <View style={styles.form}>

            <View style={styles.header}>

              <Text style={styles.emoji}> {isFilled ? '😁' : '😀'} </Text>

              <Text style={styles.title}> Como podemos {'\n'} chamar você? </Text>
              
            </View>            
            
            <TextInput 
              style={[
                styles.input,
                (isFocused || isFilled) && {borderColor: colors.green}
              ]} 
              placeholder="Digite um nome" 
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <View style={styles.footer}>

              <Button 
                title='Confirmar'
                onPress={handleSubmit}
              />       

            </View>
            
          </View>

        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>

  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    content: {
      flex: 1,
      width: '100%'      
    },
    form: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 54,      
      justifyContent: 'center'
    },
    emoji: {
      fontSize: 44
    },
    input: {
      padding: 10,
      marginTop: 50,
      width: '100%',      
      textAlign: 'center',
      borderBottomWidth: 1,             
      color: colors.heading,                       
      borderColor: colors.gray
    },
    title: {      
      fontSize: 24,
      marginTop: 20,
      lineHeight: 32,
      textAlign: 'center',
      color: colors.heading    
    },
    footer: {
      marginTop: 40,
      width: '100%',
      paddingHorizontal: 20
    },
    header: {
      alignItems: 'center'
    }
  })