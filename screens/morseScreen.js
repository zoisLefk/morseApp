import * as React from 'react';
import { styles } from '../styles/styles';
import { Header } from './header';
import { SafeAreaView, View, FlatList } from 'react-native';
import { getMorseArray } from '../helpers';
import Item from './item';
import { AdMobBanner } from 'expo-ads-admob';

export default function MorseScreen({ navigation }) {
    const [data, setData] = React.useState([
        { text: 'ena', key: '1' },
        { text: 'duo', key:'2' },
        { text: 'tria', key:'3' }
    ])
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <Header text='Morse' />
                <FlatList 
                    data={getMorseArray()}
                    renderItem={({ item }) => (
                        <Item text={item.text} />
                    )}
                />
            </View>
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-7664051483939759/7199283223" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
            />
        </SafeAreaView>
    )
}