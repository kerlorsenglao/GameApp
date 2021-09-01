import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Button,
    TextInput,
} from 'react-native';

export default class Animations extends Component {
    animatedWidth = new Animated.Value(200);
    animate = (value) => {
        Animated.timing(
        this.animatedWidth,
        {
            toValue: value,
            duration: 1000,//ໄລຍະເວລາໃຊ້ໃນການ animations
            
        }
        ).start()
    }
 render() {
    return (
        <View style={styles.container}>
            <Animated.View style={{ width: this.animatedWidth }}>
                <TextInput
                    style={[styles.input]}
                    onBlur={() => this.animate(200)}//ຄວາມຍາວເວລາບໍ່ໄດ້ຂຽນ
                    onFocus={() => this.animate(355)}//ຄວາມຍາວເວລາເຮົາFocus
                    ref={input => this.input = input}//ໃຊ້ເພື່ອ onPress,Focus ເຂົ້າເຖີງ
                />
            </Animated.View>
            <View style = {styles.buttons}>
                <Button 
                    title='Submit'
                    onPress={() => this.input.blur()}
                />
            </View>
            
        </View>
    );
 }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
    },
    input: {
        height: 50,
        marginHorizontal: 15,
        backgroundColor: '#ededed',
        marginTop: 10,
        paddingHorizontal: 9,
        fontSize: 18,
    },
    buttons:{
        marginTop: 50
    }
});
   