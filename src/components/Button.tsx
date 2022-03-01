import React from 'react';
import { ButtonProps, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

import colors from '../styles/colors';

interface ButtonPropos extends TouchableOpacity{
  title: string;
  }

export function Button({title, ...rest}: ButtonProps){
  return(
    <TouchableOpacity 
      style={styles.container} 
      {...rest}
    >
      <Text style={styles.text}>
        {title}
      </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  },
  text: {
    fontSize: 16,
    color: colors.white    
  }
})