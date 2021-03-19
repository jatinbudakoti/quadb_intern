import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Pro = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Pro</Text>
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

export default Pro;