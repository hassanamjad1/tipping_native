import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';

import { StyleSheet, Text, View } from 'react-native';

const styling = StyleSheet.create({
    textTitle : {
        fontSize : 17,
        color : 'black',
        fontWeight : '700',
        letterSpacing : 1.5,

    },

    splitContainer:{
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    icon : {
        fontWeight : '400',
        backgroundColor : 'red',
        borderRadius : 100,
    },

});

const Count = ({totalCount, handleCountAdd, handleCountRemove}) => {
    return (
        <View>
            <Text style = {styling.textTitle}> Split </Text>
            <View style = {styling.splitContainer}>
                <MaterialIcons style={styling.icon} 
                    name = 'plus'
                    size = {24}
                    onPress = {handleCountAdd} 
                />
                    
                <MaterialIcons style={styling.icon} 
                    name = 'minus'
                    size = {24}
                    onPress = {handleCountRemove}
                    disabled = {totalCount < 2}
                />

            </View>
        </View>
    );
};

export default Count;