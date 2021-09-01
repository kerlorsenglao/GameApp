import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';


const Input =props=>{
    return(
        <TextInput {...props} style={{...styles.input,...props.style}}>
        </TextInput>
    )
}
const styles = StyleSheet.create({
    input:{
        height: 35,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
});
export default Input;