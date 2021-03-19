import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TextInput, Image, TouchableOpacity, Animated } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import OrderAgain from '../Components/OrderAgain';
import Happy from '../Components/Happy';
import Restaurant from '../Components/Restaurant';

const Order = () => {
    const [inputText, setInputText] = useState('');
    const [animatedHeader, setAnimatedHeader] = useState(new Animated.Value(0))
    const metaData = [
        {title: 'Pro', icon: 'crown-outline'},
        {title: 'Cuisines', icon: 'menu-down'},
        {title: 'Rating 4.0+', icon: ''},
        {title: 'Fastest Delivery', icon: ''},
        {title: 'Offers', icon: 'crown-outline'},
        {title: 'Takeaway', icon: 'crown-outline'},
        {title: 'more', icon: 'mwnu-down'},

    ]

    let animatedmargin = animatedHeader.interpolate({
        inputRange: [0, 50],
        outputRange: [50, 0],
        extrapolate: 'clamp',
    },)
    
    let animatedmarginSearchBar = animatedHeader.interpolate({
        inputRange: [0, 50],
        outputRange: [60, 10],
        extrapolate: 'clamp'
    })

    let animatedBorder = animatedHeader.interpolate({
        inputRange: [0, 50],
        outputRange: [2, 0],
        extrapolate: 'clamp'
    })

    return (
        <View style = {styles.container}>

            <Animated.View style = {{flexDirection: 'row', marginStart: 10, alignSelf: 'flex-start', width: '70%', alignItems: 'center', height: animatedmargin, position: 'absolute', top: 0}}>
                <Entypo name = 'location' color = 'black' size = {30} />
                <Animated.Text style = {{fontSize: 22, fontWeight: '900', marginLeft: 7,  marginTop: 10, borderColor: 'black', borderBottomWidth: animatedBorder, borderStyle: 'dashed', borderRadius: 1, paddingBottom: 5}} numberOfLines = {1}>Home - Block G, Jawahar Colony</Animated.Text>
            </Animated.View> 

            <Animated.View style = {{...styles.searchBar, marginTop: animatedmarginSearchBar}}>
                <EvilIcons name = 'search' color = 'red' size = {30} style = {{alignSelf: 'center'}} />
                <TextInput
                    value = {inputText}
                    placeholder = 'Restaurant name, cuisines, or a dish...'
                    style = {{fontSize: 16, color: 'black', flex: 1}}
                    onChangeText = {(value) => setInputText(value)}
                />
            </Animated.View>


            <View style = {styles.popular}>
                <FlatList
                    data = {metaData}
                    horizontal
                    keyExtractor = {(item) => item.title}
                    style = {{flex: 1}}
                    showsHorizontalScrollIndicator = {false}
                    contentContainerStyle = {{paddingHorizontal: 10}}
                    renderItem = {({item}) => {
                        return (
                            <View style = {styles.popularItem}>
                                {item.title === 'Pro' ? <MaterialCommunityIcons name = {item.icon} color = 'black' size = {15} /> : null}
                                <Text style = {{marginHorizontal: 5}}>{item.title}</Text>
                                {item.icon === 'menu-down' ? <MaterialCommunityIcons name = {item.icon} color = 'black' size = {20} /> : null}
                            </View>
                        )
                    }} 
                />
                <View style = {{...styles.popularItem, marginRight: 0}}>
                    <FontAwesome name = 'arrows-v' color = 'black' size = {15} />
                    <Text style = {{marginLeft: 5}}>Popular</Text>
                </View>
            </View>


            <ScrollView
                onScroll = {Animated.event([{
                    nativeEvent: {
                        contentOffset: {
                            y: animatedHeader,
                        },
                    },
                }], )}
            >

                <View style = {styles.banner}>
                    <TouchableOpacity style = {styles.bannerImage} activeOpacity = {1}>
                        <Image style = {{height: '100%', width: '100%'}} source = {{uri: 'https://cdn.dribbble.com/users/5361666/screenshots/14230605/media/1650e790cb712f8beb8a99011cf0c3c4.jpg?compress=1&resize=1000x750'}} />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.bannerImage} activeOpacity = {1}>
                        <Image style = {{height: '100%', width: '100%'}} source = {{uri: 'https://image.freepik.com/free-vector/easter-dinner-banner-template_97441-118.jpg'}} />
                    </TouchableOpacity>
                </View>

                <OrderAgain />

                <Happy />

                <Restaurant />

            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 25
    },
    searchBar: {
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#dcdcdc',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    popular: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    popularItem: {
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#dcdcdc',
        borderWidth: 1,
        marginRight: 8
    },
    banner: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    bannerImage: {
        height: 250,
        width: '50%',
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 10
    }
})

export default Order;