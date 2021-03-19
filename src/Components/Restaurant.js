import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantRow from './RestaurantRow';

const Restaurant = () => {
    const metaData = [
        {title: 'Dominos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfwRPClRnNk52Zq6LzO0c5sejENqzNm9mYQ&usqp=CAU', rating: '4.6', discount: '30% OFF upto ₹250', proDiscount: '', cuisine: 'Pizza, Garlic Bread, Choco Lava', deliveryTime: '40', perPerson: '₹200'},
        {title: 'Burger King', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUhXcFo3qtKpK0E4MF7uyz5rm7DNCHV87bg&usqp=CAU', rating: '4.2', discount: '30% OFF upto ₹150', proDiscount: 'PRO 15% OFF', cuisine: 'Burger, Beverages', deliveryTime: '36', perPerson: '₹100'},
        {title: 'BTW', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg30X2p1aR1RiSyTOy-kQ5MCVfqmVh8OR0Qw&usqp=CAU', rating: '4.5', discount: '40% OFF upto ₹100', proDiscount: '', cuisine: 'Chaat, Tikki, Papdi', deliveryTime: '25', perPerson: '₹70'},
        {title: 'Rolls Queen', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx43lGftGE1k_WbvmQnJPafj9XDbPgKrz1sQ&usqp=CAU', rating: '3.8', discount: '20% OFF upto ₹150', proDiscount: '', cuisine: 'Rolls, Chicken, Egg, Soya', deliveryTime: '32', perPerson: '₹150'},
        {title: 'Sagar Ratna', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYNYMx4FasFfbvJ16SObG4A_wEe0U6auNPg&usqp=CAU', rating: '4.0', discount: '25% OFF upto ₹200', proDiscount: 'PRO 15% OFF', cuisine: 'Idli, Dosa, Vada', deliveryTime: '42', perPerson: '₹200'}
    ]

    return (
        <View>
            <Text style = {styles.text}>5 restaurants around you</Text>

            <FlatList
                data = {metaData}
                keyExtractor = {(item) => item.title}
                contentContainerStyle = {{paddingBottom: 15}}
                renderItem = {({item}) => {
                    return (
                        <RestaurantRow item = {item} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {

    },
    text: {
        marginLeft: 10,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 22
    }
})

export default Restaurant;