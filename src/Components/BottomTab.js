import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Tab from './Tab';

const BottomTab = ({ state, descriptors, navigation }) => {
    const [selectedTab, setSelectedTab] = useState('order')

    const navigate = (route) => {
        if(selectedTab !== route) {
            navigation.navigate(route)
            setSelectedTab(route)
        }
    }

    const tabLength = [Dimensions.get('screen').width/5, 0, 0, 0, 0]

    return (
        <View style = {{flexDirection: 'row', alignItems : 'center', justifyContent: 'space-between', elevation: 10}}>
            {state.routeNames.map((route, index) => {
                return (
                    <Tab 
                    name = {route}
                    color = {selectedTab === route ? 'black' : 'gray'}
                    key = {route}
                    onPress = {() => navigate(route)}
                    isActive = {selectedTab === route ? true : false}
                    tabLength = {tabLength[index]}
                    />
                )
            })}
        </View>
    )
}

export default BottomTab;