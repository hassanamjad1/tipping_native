import React from 'react';
import {StyleSheet, View }  from 'react-native';

import Count from '../components/Count'
import Total from '../components/Total'

const styles = StyleSheet.create({
    outputCOntainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : '#bdb201',
        borderRadius : 10,
        paddingVertical : 40,
        paddingHorizontal : 20, 
    },
});

const SplitOutput = ({totalCount}, handleCountAdd, handleCountRemove, totalAmount) => {
    return (
        <View style= {styles.outputCOntainer}>
            <Count 
                totalCount = {totalCount}
                handleCountAdd = {handleCountAdd}
                handleCountRemove = {handleCountRemove}
            />
            <Total 
                totalAmount = {totalAmount}
            />

        </View>
    );
};

export default SplitOutput;


