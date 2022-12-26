import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Keyboard(props) {
    return (
        <View style={styles.keyboard}>
            <View style={[styles.row, {marginHorizontal: 20}]}>
                <TouchableOpacity style={styles.keyButton} onPress={() => props.changeText('.')}>
                    <Ionicons name="ellipse" size={10} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButton} onPress={() => props.changeText('-')}>
                    <Ionicons name="ios-remove-outline" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButton} onPress={() => props.changeText('/')}>
                    <Text style={styles.btnText}>
                        /
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButton} onPress={() => props.changeText('//')}>
                    <Text style={styles.btnText}>
                        //
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButton} onPress={() => props.removeLast()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    keyboard: {
        backgroundColor: '#023954',
        margin: 10,
        padding: 5,
        paddingTop: 10,
        borderRadius: 10
    },
    row: {
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 5
    },
    keyButton: {
        backgroundColor: '#0096cf',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    btnText: {
        fontSize: 18
    },
    button: {
        backgroundColor: '#a5a7a8',
        paddingHorizontal: 5,
        paddingVertical: 2,
        paddingHorizontal: 20,
        alignItems: 'center'
    }
});