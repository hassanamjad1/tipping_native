//our home screen which comprise the Input.js and SplitOutput.js components

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Input from '../components/Input'
import SplitOutput from '../containers/SplitOutput';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 40,
        paddingHorizontal : 30,

    },
});

const Home = () => {
    const bill = '0.00';
    const tip = '10';
    const split = '2';
    const totalAmount = '0.00';

    const handleBillChange = (value) => {
        console.log(value);
    };
    const handleTipChange = (value) => {
        console.log(value);
    };
    const handleCountAdd = () => {}
    const handleCountRemove = () => {}  

    return (
        <View style = {styles.container}>
            <Input
                label = 'Bill Total'
                amount = {bill}
                placeholderText = '0.00'
                handleTextChange = {handleBillChange}

            />
            <Input
                label = 'Tip'
                amount = {tip}
                placeholderText = '10'
                handleTextChange = {handleTipChange}
            />
            <SplitOutput
                totalCount = {split}
                handleCountAdd = {handleCountAdd()}
                handleCountRemove = {handleCountRemove()}
                totalAmount = {totalAmount}
            /> 

        </View>
    );
};

export default Home;