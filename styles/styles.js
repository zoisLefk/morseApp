import * as React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1097e6",
      },
      safeAreaView: {
        width: "95%",
        padding: 15,
        marginTop: 10,
        backgroundColor: '#75bee6',
        borderRadius: 20,
        borderColor: '#2f3336',
        borderWidth: 1,
        maxHeight: '60%'
      },
      inputText: {
        backgroundColor: "#ffffff",
        width: '95%',
        padding: 5,
        borderRadius: 10,
        borderColor: '#2f3336',
        borderWidth: 1,
        maxHeight: '100%',
        marginRight: 5,
        fontSize: 20
      },
      button: {
        backgroundColor: '#023954',
        borderWidth: 1,
        borderRadius: 10,
        padding: 7,
        marginTop: 10,
        marginRight: 20,
        alignSelf: 'flex-end',
      },
      inputs: {
        paddingTop: '40%',
        width: '100%',
        alignItems: 'center',
      },
      contentContainer: {
          flex: 1
      },
      row: {
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 5
    },
})