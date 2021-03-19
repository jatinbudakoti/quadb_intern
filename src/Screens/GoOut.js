import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoOut = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Go Out</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25
    }
})

export default GoOut;