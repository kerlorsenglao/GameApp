import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Header =({title})=>{
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop: 30,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerTitle:{
        color: 'black',
        fontSize: 19,

    }
})

export default Header;