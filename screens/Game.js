import React,{useState,useRef,useEffect} from 'react';
import {View,Text,StyleSheet,Button,Alert} from 'react-native';
import Number from './Number';
import Card from './Card';


const generateRandomBetween =(min,max,exclude)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rnNumber = Math.floor(Math.random() * (max-min))+min;
    if(rnNumber === exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return rnNumber;
    }
}
const Game=props=>{
    const currentLow = useRef(1);
    const currentHeigh = useRef(100);
    const [rounds,setRounds] = useState(0);
    const {userChoice,onGameOver} = props;
    useEffect(()=>{// Allow excute logic after render
        if(currentGuest === userChoice){
            onGameOver(rounds);
        }
    });//[currentGuest,userChoice,onGameOver]
    const [currentGuest,setCurrentGuest] = useState(
        generateRandomBetween(1,100,props.useChoice));
    const nextGuessHandler = direction =>{
        if((direction === 'lower' && currentGuest < props.userChoice) || 
            (direction === 'greater' && currentGuest > props.userChoice)){
            Alert.alert('Dont lie','You know that is incorrect!',[{
                text:'sorry',style:'cancel'
            }]);
            return;
        }
        if(direction === 'lower'){
            currentHeigh.current = currentGuest;
        }else{
            currentLow.current = currentGuest;
        }
        const nextNumber = generateRandomBetween(currentLow.current,currentHeigh.current,currentGuest);
        setCurrentGuest(nextNumber);
        setRounds(curRounds => curRounds+1);
    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guest</Text>
            <Number>{currentGuest}</Number>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={nextGuessHandler.bind(this,'lower')}/>
                <Button title='GREATER' onPress={nextGuessHandler.bind(this,'greater')}/>
            </Card>
        </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
});
export default Game;