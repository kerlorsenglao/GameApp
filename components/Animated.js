import React,{Component} from 'react';
import {View,Animated,StyleSheet,Button, Text} from 'react-native';

class Animate extends Component{
  maginTop = new Animated.Value(30);
  animate=()=>{
    Animated.timing(
      this.maginTop,
      {
        toValue: 200,
        duration: 500,
        useNativeDriver: true,
      }
    ).start()
  }
  render(){
    return(
      <View style={styles.container}>
        <Button
          title='Animate Boxing'
          onPress={this.animate}
        />
        <Animated.View
          style={[styles.box, { marginTop: this.marginTop } ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red'
  }
});
export default Animate;