import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const icon = (routeName, color) => {
    if(routeName === 'order') {
        return <Feather name = 'shopping-bag' color = {color} size = {25} />
    }
    else if(routeName === 'goout'){
        return <Foundation name = 'foot' color = {color} size = {25} />
    }
    else if(routeName === 'pro'){
        return <MaterialCommunityIcons name = 'crown-outline' color = {color} size = {25} />
    }
    else if(routeName === 'donate'){
        return <MaterialCommunityIcons name = 'hand-heart' color = {color} size = {25} />
    }
    else if(routeName === 'account'){
        return <MaterialCommunityIcons name = 'account-circle' color = {color} size = {25} />
    }
}

const title = (routeName, color) => {
    if(routeName === 'order') {
        return <Text style = {{color: color}}>Order</Text>
    }
    else if(routeName === 'goout'){
        return <Text style = {{color: color}}>Go Out</Text>
    }
    else if(routeName === 'pro'){
        return <Text style = {{color: color}}>Pro</Text>
    }
    else if(routeName === 'donate'){
        return <Text style = {{color: color}}>Donate</Text>
    }
    else if(routeName === 'account'){
        return <Text style = {{color: color}}>Account</Text>
    }
}

const Tab = ({name, color, onPress, isActive, tabLength}) => {
    const [animatedHeader, setAnimatedHeader] = useState(new Animated.Value(tabLength));
    const _width = Dimensions.get('screen').width/5;

    const beginNavigation = () => {
        if(!isActive){
            animatedHeader.setValue(0);
        }
        Animated.timing(animatedHeader, {
            toValue: _width,
            duration: 500,
            useNativeDriver: false
        }).start();
        onPress()
    }

    return (
        <TouchableOpacity style = {{alignItems: 'center', justifyContent: 'center', flex: 1, paddingTop: 8}} onPress = {() => beginNavigation()}>
            {isActive ? <Animated.View style = {{backgroundColor: 'red', width: animatedHeader, height: 3, position: 'absolute', top: 0, left: 0}} /> : null}
            {icon(name, color)}
            {title(name, color)}
        </TouchableOpacity>
    )
}

export default Tab;