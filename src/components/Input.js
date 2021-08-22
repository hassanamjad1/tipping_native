
//importing components and libraries here
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


//stylesheet that is handling the look of our compnonent that we defined over here
//written in css
//imported from stylesheet as well
const styles = StyleSheet.create({
    section: {
        padding: 10,
        marginVertical: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 17,
        color: 'gray',
        letterSpacing: 1.5,
        fontWeight: '700',
    },
    textInput: {
        fontSize: 20,
        // fontWeight: '700',
    },

});

//this is a FUNCTIONAL component (different from a class component)
const Input = ({label, amount, placeholderText, handleTextChange}) => {
    return (
        <View style={styles.section}>
            <Text style={styles.titleText} >{label}</Text>
            <TextInput 
                style= {styles.textInput}
                keyboardType = 'numeric'
                placeholder = {placeholderText}
                defaultValue = {amount}
                onChangeText = {handleTextChange}
            />
            {label === 'Tip' ? <Text style= {styles.textInput} >%</Text> : null}
        </View>
    );
};

export default Input;