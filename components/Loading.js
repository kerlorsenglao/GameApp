import React, { Component } from 'react';
import {
    Easing,
    StyleSheet,
    View,
    Animated,
    Text,
    Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Loading extends Component{
    state ={
        loading: true,
    }
    animatedRotation = new Animated.Value(0);
    componentDidMount(){
        this.animate();
        setTimeout(
            ()=>this.setState({loading: false}),5000
        );
    }
    // onLogin=()=>{
    //     this.animate();
    //     setTimeout(
    //         ()=>this.setState({loading: true}),100
    //     );
    // }
    // onSuccess=()=>{
    //     this.setState({loading: false});
    // }
    animate=()=>{
        Animated.loop(
            Animated.timing(
                this.animatedRotation,
                {
                    toValue: 1,
                    duration: 1500,//ຄວາມໄວຂອງການໝູນ
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            )
        ).start()
    }

    render(){
        const rotation = this.animatedRotation.interpolate({
            inputRange: [0, 1],// ເພື່ອໃຫ້ປິ່ນຕໍ່ເນື່ອງ
            outputRange: ['0deg', '360deg'],
            });
        const { loading } = this.state;
        return(
            <View style={styles.container}>
                {/* <Button
                    title='Login'
                    onPress={this.onLogin}
                /> */}
                {
                    loading ?
                    (
                        <Animated.Image
                            source={require('./loading.gif')}
                            style={{ width: 200,
                            height: 200,
                            transform: [{ rotate: rotation }] }}
                        />
                    ) : 
                    (
                        <Text>Welcome To My App</Text>
                    )
                }
                {/* <Button 
                    title='Success'
                    onPress ={this.onSuccess}
                /> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 50,
    },
    input: {
        height: 50,
        marginHorizontal: 15,
        backgroundColor: '#ededed',
        marginTop: 10,
        paddingHorizontal: 9,
    },
});

export default Loading;