import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const OrderAgain = () => {
    const metaData = [
        {restaurantname: 'Pizza Live', image: 'https://b.zmtcdn.com/data/pictures/2/18568862/e1394dd67da6bcdfa9276632dff06ac6.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*', deliveryTime: '35', discount: '50%'},
        {restaurantname: 'Dominos', image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg', deliveryTime: '40', discount: '25%'},
        {restaurantname: 'Burger King', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQPRLkjUzGChUKtjWBU0lI1YZy_O2D7PoOw&usqp=CAU', deliveryTime: '40', discount: '40%'},
        {restaurantname: 'Keventers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLZCKNuii3JKq0ljuWhXgbb21a9gawGRx2w&usqp=CAU', deliveryTime: '45', discount: '30%'},
    ]

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Order Again</Text>
            <FlatList
                data = {metaData}
                keyExtractor = {(item) => item.restaurantname}
                horizontal
                showsHorizontalScrollIndicator = {false}
                contentContainerStyle = {{paddingHorizontal: 10}}
                renderItem = {({item}) => {
                    return (
                        <View style = {styles.row}>
                            <Image resizeMode = 'cover' source = {{uri: item.image}} style = {styles.image} />
                            <View>
                                <Text style = {styles.restaurantName}>{item.restaurantname}</Text>
                                <Text style = {styles.deliveryTime}>{item.deliveryTime} min</Text>
                                <Text style = {styles.discount}>{item.discount} OFF</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    text: {
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 22
    },
    row: {
        marginRight: 20,
        flexDirection: 'row',
        alignItems :'center'
    },
    image: {
        height: 80, 
        width: 80, 
        borderRadius: 10, 
        marginRight: 15
    },
    restaurantName: {
        fontSize: 20,
        fontWeight: '500'
    },
    deliveryTime: {
        fontSize: 16,
        color: '#3f3f3f',
        fontWeight: '100'
    },
    discount: {
        color: 'blue',
        fontSize: 16
    }
})

export default OrderAgain;