import React from 'react';
import { View,Text,StyleSheet } from 'react-native'

const Card=props=>{
    return(
        <View style={{...styles.cardStyle,...props.style}}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    cardStyle:{
        shadowColor: 'black',
        shadowOffset: {width:0,height:2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 6,// for android,
        padding: 20,
        borderRadius: 16,
    }
});
export default Card;