import React from "react";
import { View,Text, StyleSheet, Button } from "react-native";
import Card from "./Card";

const GameOver =props=>{
    return (
        <View style={styles.screen}>
            <Card>
                <Text style={styles.text}>The game is over!</Text>
                <Text>Number of rounds: {props.rounds}</Text>
                <Text>Number was: {props.userNumber}</Text>
            </Card>
            <View style={{marginTop: 20}}>
                <Button title='New Game' onPress={props.newGameHandler}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 20,
        fontWeight:'bold',
        color: 'red'
    }
});
export default GameOver;