import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Drawer from './src/Drawer';
import TouchFeedBack from './src/TouchFeedBack';
import Shadow from './src/Shadow';
import Visualize from './src/Visualize';
import Modals from './src/Modal';
import Header from './screens/Header';
import StartGame from './screens/StartGame';

const App=()=>{
    return (
        <View style={styles.screen}>
            <Header title="Guast A Number"/>
            <StartGame/>
        </View>
    )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
export default App;
