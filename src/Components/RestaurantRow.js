import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const RestaurantRow = ({item}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.image}>
                <Image source = {{uri: item.image}} style = {{width: '100%', height: '100%'}} />
                <View style = {styles.bookmark}>
                    <Feather name = 'bookmark' color = 'black' size = {20} />
                </View>
                <View style = {styles.discount}>
                    <Text style = {styles.discountText}>{item.discount}</Text>
                    {item.proDiscount !== '' ? <View style = {styles.plus}>
                        <Feather name = 'plus' color = 'black' size = {10} />
                    </View> : null}
                    {item.proDiscount !== '' ? <Text style = {styles.proDiscountText}>{item.proDiscount}</Text> : null}
                    <Text style = {styles.deliveryTime}>{item.deliveryTime} min</Text>
                </View>
            </View>

            <View style = {styles.title}>
                <Text style = {{fontSize: 20, fontWeight: '900', flex: 1}}>{item.title}</Text>
                <View style = {styles.rating}>
                    <Text style = {{color: 'white', fontSize: 14}}>{item.rating}</Text>
                    <Entypo name = 'star' color = 'white' size = {15} />
                </View>
            </View>

            <View style = {{...styles.title, marginTop: 1}}>
                <Text style = {{color: 'gray', flex: 1}}>{item.cuisine}</Text>
                <Text style = {{color: 'gray', fontSize: 16}}>{item.perPerson} for one</Text>
            </View>


            <View style = {{...styles.title, marginTop: 5, marginBottom: 14, alignItems: 'center'}}>
                <Image source = {require('../Images/safety.jpg')} style = {{width: 60, height: 20, borderRadius: 3}} />
                <Text style = {{flex: 1, marginLeft: 5}} numberOfLines = {2}>Follows all max safety measures to ensure your food is safe </Text>
                <View style = {{height: 20, width: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: 'purple'}}>
                    <MaterialCommunityIcons name = 'arrow-top-right' color = 'white' size = {15} />
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignSelf: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 15,
        backgroundColor: 'white',
        elevation: 10
    },
    image: {
        width: '100%',
        height: 200
    },
    bookmark: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 2
    },
    discount: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 0,
        zIndex: 2,
        width: '100%',
    },
    discountText: {
        backgroundColor: 'blue',
        color: 'white',
        paddingRight: 20,
        paddingLeft: 10
    },
    plus: {
        width: 15, 
        height: 15, 
        borderRadius: 15, 
        backgroundColor: 'white', 
        left: -7.5,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
    },
    proDiscountText: {
        backgroundColor: 'red',
        color: 'white',
        paddingLeft: 20,
        paddingRight: 10,
        left: -15
    },
    deliveryTime: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        paddingHorizontal : 5,
        borderRadius :5,
        position: 'absolute',
        right: 10,
        fontSize :14
    },
    title: {
        flexDirection: 'row',
        marginTop: 12,
        marginHorizontal: 10,
        marginBottom: 2,
    },
    rating: {
        backgroundColor: '#32CD32',
        flexDirection: 'row',
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 5,
        alignItems: 'center'
    }
})

export default RestaurantRow;