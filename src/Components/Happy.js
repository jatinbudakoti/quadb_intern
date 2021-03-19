import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import Collapsible from 'react-native-collapsible';
import AntDesign from 'react-native-vector-icons/AntDesign';

const _width = Dimensions.get('screen').width/5

const Happy = () => {
    const [isCollpased, setIsCollapsed] = useState(true)
    const [collpasedText, setCollapsedText] = useState('see more')
    const [collpasedIcon, setCollapsedIcon] = useState(<AntDesign name = 'down' color = 'black' size = {15} />)

    const metaData = [
        {title: 'Healthy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZc4w6VqTOytrtkznowyHdae_4GGmDX8TGjg&usqp=CAU'},
        {title: 'Pasta', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtorXs9lrdrHApHaH4o7CD0Dp8cvzdSMtWQ&usqp=CAU'},
        {title: 'Pizza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Ky-TfZbCPLqqxE_eflcbisrDQAlSDYN7ZQ&usqp=CAU'},
        {title: 'Chicken', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0eZdSByhc0JNsziU6P-rLPo7ActKCyRBgw&usqp=CAU'},
        {title: 'Burger', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl14jVNzlQvS-ik5B2xVmCyUdxk39h6ceL_g&usqp=CAU'},
        {title: 'Rolls', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXS3icf9zJUBBffHlTVbUvN0SpFMcjSxhHzg&usqp=CAU'},
        {title: 'Paneer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi0U0zdKlcRtUDm3Wq4hcR7bmP4ry5oKe9w&usqp=CAU'},
        {title: 'Chaat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUujYSpX6oPnufVbdLT9xUWKDdXGVB1tNNiA&usqp=CAU'}
    ];

    const metaData2 = [
        {title: 'Momos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3su4uHgrUv5U0yJXNa-iEM3q1gXS2TPaiw&usqp=CAU'},
        {title: 'Dal', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tZJmWhd3xvQiK14cjmB9dKJfO02cjQkglw&usqp=CAU'},
        {title: 'Cake', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9CXAFWkzlaQSYLCZGRkf3sU_QXWgcuAryw&usqp=CAU'},
        {title: 'Biryani', image: 'https://www.whiskaffair.com/wp-content/uploads/2019/02/Mutton-Biryani-3.jpg'},
        {title: 'Chaap', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqU60-n4ZREg_bGNJHzXXlNlIJiJ0bsvkrxg&usqp=CAU'},
        {title: 'Paratha', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtLHYaJWTubKwmjXR-x1wv_pKyFsni7UmtQ&usqp=CAU'},
        {title: 'Noodle', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOM5GdsAHp2tSheHf33TLAe7FPWn4li1zHgg&usqp=CAU'},
        {title: 'Fries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7u1bXZuNdFxNh7jobxxS7piXUzL78MfTxA&usqp=CAU'},
    ];

    const expand = () => {
        if(isCollpased){
            setIsCollapsed(false);
            setCollapsedText('see less');
            setCollapsedIcon(<AntDesign name = 'up' color = 'black' size = {15} />)
        }
        else{
            setIsCollapsed(true);
            setCollapsedText('see more');
            setCollapsedIcon(<AntDesign name = 'down' color = 'black' size = {15} />)
        }
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Eat what makes you happy</Text>
            <FlatList
                data = {metaData}
                style = {{marginHorizontal: 7.5, alignSelf: 'center'}}
                numColumns = {4}
                keyExtractor = {(item) => item.title}
                renderItem = {({item}) => {
                    return (
                        <View style = {styles.row} >
                            <Image source = {{uri: item.image}} style = {{width: _width, height: _width, borderRadius: _width}} />
                            <Text style = {{marginVertical: 10}}>{item.title}</Text>
                        </View>
                    )
                }}
            />

            <Collapsible collapsed = {isCollpased}>
                <FlatList
                    data = {metaData2}
                    style = {{marginHorizontal: 7.5, alignSelf: 'center', minHeight: 150}}
                    numColumns = {4}
                    keyExtractor = {(item) => item.title}
                    renderItem = {({item}) => {
                        return (
                            <View style = {styles.row} >
                                <Image source = {{uri: item.image}} style = {{width: _width, height: _width, borderRadius: _width}} />
                                <Text style = {{marginVertical: 10}}>{item.title}</Text>
                            </View>
                        )
                    }}
                />
            </Collapsible>

            <TouchableOpacity style = {styles.collapsedButton} activeOpacity = {1} onPress = {() => expand()}>
                <Text style = {{marginRight: 8}}>{collpasedText}</Text>
                {collpasedIcon}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    text: {
        marginLeft: 10,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 22
    },
    image: {
        height: _width,
        width: _width
    },
    row: {
        marginHorizontal: 7,
        alignItems: 'center'
    },
    collapsedButton: {
        width: '95%',
        marginHorizontal: 15,
        alignSelf: 'center',
        borderColor: '#c3c3c3',
        borderWidth: 0.5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        flexDirection: 'row',
        marginVertical: 10
    }
})

export default Happy;