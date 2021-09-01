import React ,{ useState } from 'react';
import { View,Text,StyleSheet,Button,TouchableWithoutFeedback,
        Keyboard,Alert } from 'react-native';
import Card from './Card';
import Input from './Input';
import Number from './Number';
import colors from '../constants/colors';

const StartGame =()=>{

    const [enterValue,setEnterValue] = useState('');
    const [comfirmed,setComfirmed] = useState(false);
    const [selectNumber,setSelectNumber] = useState();
    let comfirmOutPut;
    if(comfirmed){
        comfirmOutPut = <Card style={styles.summaryContainer}>
             <Text>Your Number Is</Text>
             <Number>{selectNumber}</Number>
             <Button title='START GAME'/>
        </Card>
    }

    const inputHandler =(inputText)=>{
        setEnterValue(inputText.replace(/[^0-9]/g,''));
    }
    const resetHandler =()=>{
        setEnterValue('');
        setComfirmed(false);
    }
    const comfirmHandler =()=>{
        const chosenNumber = parseInt(enterValue);
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
            Alert.alert('Invalid Number','Must be 1 to 99',
            [{text:'Okey',style:'destructive',onPress: resetHandler}])
            return;
        }
        setComfirmed(true);
        setSelectNumber(chosenNumber);
        setEnterValue('');
        Keyboard.dismiss();
    }
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input 
                        style={styles.input}
                        blurOnSubmit autoCapitalize='none' 
                        autoCorrect={false}
                        keyboardType='number-pad' 
                        maxLength={2}
                        onChangeText={inputHandler}
                        value={enterValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetHandler} color={colors.accent}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={comfirmHandler} color={colors.primary}/>
                        </View>
                    </View>
                </Card>
                {comfirmOutPut}
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button:{
        width: 90
    },
    input:{
        width: 60,
        textAlign: 'center',
    },
    summaryContainer:{
        marginTop: 20,
        alignItems: 'center'
    }
});
export default StartGame;
