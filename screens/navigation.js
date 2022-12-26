import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const Navigation = (props) => {
  const buttonStyle = (screen) => {
    if (screen === props.screen) {
      return {
        padding: 10,
        width: '30%',
        alignItems: "center",
        backgroundColor: '#75bee6'
      }
    }
    return {
      padding: 10,
      width: '30%',
      alignItems: "center",
    }
  }
  
  return(
      <View style={styles.navigation}>
          <TouchableOpacity
            style={buttonStyle('TextToMorse')}
            onPress={() => props.navigation.navigate('TextToMorse')}
          >
            <Text>A σε .-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyle('MorseToText')}
            onPress={() => props.navigation.navigate('MorseToText')}
          >
            <Text>.- σε Α</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyle('MorseScreen')}
            onPress={() => props.navigation.navigate('MorseScreen')}
          >
            <Text>Morse</Text>
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    backgroundColor: '#023954',
  },
  button: {
    padding: 10,
    width: '30%',
    alignItems: "center",
  },
  selected: {
    backgroundColor: '#75bee6'
  }
})