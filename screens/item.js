import * as React from 'react';
import { StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native';

export default function Item({ text }) {
    return(
        <View style={styles.item}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#023954',
        margin: 5,
        marginHorizontal: 50,
        padding: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#75bee6',
        fontSize: 18
    }
});