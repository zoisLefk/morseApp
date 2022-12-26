import React from "react";
import { Text, View, TextInput, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { translateText } from "../helpers";
import * as Clipboard from 'expo-clipboard';
import { Header } from "./header";
import { styles } from "../styles/styles";
import { AdMobBanner } from "expo-ads-admob";

export const TextToMorse = ({ navigation }) => {
    const [text, setText] = React.useState("");
    const [text1, setText1] = React.useState("");
    
    const copyText = () => {
        Clipboard.setString(text1)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <Header text={"Από κείμενο σε morse"} />
                <View style={styles.inputs}>
                    <TextInput
                    multiline
                    onChangeText={text => {
                        setText(text);
                        setText1(translateText(text));
                    }}
                    value={text}
                    style={styles.inputText}
                    placeholder='Γράψε κάτι...'
                    />
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
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-7664051483939759/7199283223" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
            />
        </SafeAreaView>
    );
}