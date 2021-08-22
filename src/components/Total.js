import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create ({
    textTitle : {
        fontSize : 17,
        color : 'black',
        fontWeight : '700',
        letterSpacing :1.5,
    },
    textOutput : {
        fontSize : 25,
        // fontWeight : '700',
        color : 'black',
        // letterSpacing : 1.5,

    },
});

const Total = ({totalAmount, handleAmountChange}) => {
    return(
        <View>
            <Text style = {styles.textTitle}>Total</Text>
            <Text style = {styles.textOutput}></Text>
        </View>
    );
};

export default Total;