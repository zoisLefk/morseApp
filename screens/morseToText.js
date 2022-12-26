import React from "react";
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Header } from "./header";
import { styles } from "../styles/styles";
import Keyboard from './keyboard';
import { translateMorse } from "../helpers";
import { Ionicons } from '@expo/vector-icons';
import { AdMobBanner } from 'expo-ads-admob';

export const MorseToText = ({ navigation }) => {
    const [text, setText] = React.useState("");
    const [text1, setText1] = React.useState("");

    const copyText = () => {
        Clipboard.setString(text1)
    }

    const changeText = (s) => {
      var newText = text;
      if ((text.charAt(text.length-1) !== '/' || (s !== '/' && s !== '//')) && (text !== '' || (s !== '/' && s !== '//')))
        newText += s;
      setText(newText);
      setText1(translateMorse(newText))
    }

    const removeLast = () => {
      const num = text.charAt(text.length-1) === '/' && text.charAt(text.length-2) === '/' ? 2 : 1;
      const newText = text.substring(0, text.length-num)
      setText(newText)
      setText1(translateMorse(newText))
    }
    
    const removeAll = () => {
      setText('')
      setText1('')
    }
    
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.contentContainer}>
            <Header text={"Από morse σε κείμενο"} />
            <View style={styles.inputs}>
              <View style={styles.inputText}>
                <View style={[styles.row, { marginHorizontal: 0 }]}>
                  <Text style={{ fontSize: 20, color: '#9da6a0', maxWidth: '90%'}}>{text || 'Γράψε κάτι...'}</Text>
                  <TouchableOpacity onPress={() => removeAll()}>
                    <Ionicons name="close" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <SafeAreaView style={styles.safeAreaView}>
                  <ScrollView style={styles.scrollView}>
                      <Text selectable={true}>
                      {text1}
                      </Text>
                  </ScrollView>
              </SafeAreaView>
              <TouchableOpacity
              style={styles.button}
              onPress={copyText}
              >
                  <Text style={{color: '#75bee6'}}>Αντιγραφή</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Keyboard changeText={changeText} removeLast={removeLast} />
          <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-7664051483939759/7199283223" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
            />
        </SafeAreaView>
    );
}