import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {props.text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#023954'
    },
    title: {
        textAlign: 'center',
        color: '#75bee6',
        fontSize: 25
    }
})