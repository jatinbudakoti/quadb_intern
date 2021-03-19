import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Account = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Account</Text>
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

export default Account;