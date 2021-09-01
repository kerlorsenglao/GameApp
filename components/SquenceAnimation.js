import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated
} from 'react-native';

class SequenceAnimation extends Component{
    componentDidMount(){
        this.animate();
    }
    AnimatedValue1 = new Animated.Value(-30);// ຄວາມໝາຍຄື:ຕຳແໜ່ງຂອງTextທຳອິດແມ່ນ
    AnimatedValue2 = new Animated.Value(-30);// ຢູ່ເໜຶອ Screen ໄປ 30 pixel ແລະ ເວລາ
    AnimatedValue3 = new Animated.Value(-30);// animate ຈັ່ງໃຫ້ລົງມາ
    animate=()=>{
        const createAnimation = (value)=>{
            return Animated.timing(
                value, 
                {
                toValue: 200,//ໄລຍະນັບແຕ່ເຖີງລົງມາ
                duration: 500,//ຄວາມໄວໃນການ animation
                // useNativeDriver: true
                }
            )               
        }
        Animated.sequence([
            createAnimation(this.AnimatedValue1),
            createAnimation(this.AnimatedValue2),
            createAnimation(this.AnimatedValue3)
        ]).start()
    }

    render(){
        return(
            <View style={styles.container}>
                <Animated.Text style={[styles.text,
                    { marginTop: this.AnimatedValue1}]}>
                    text1
                </Animated.Text>
                <Animated.Text style={[styles.text,
                    { marginTop: this.AnimatedValue2}]}>
                    text2
                </Animated.Text>
                <Animated.Text style={[styles.text,
                    { marginTop: this.AnimatedValue3}]}>
                    text3
                </Animated.Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        marginHorizontal: 20,
        fontSize: 26
    }
});

export default SequenceAnimation;