import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Donate = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Donate</Text>
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

export default Donate;