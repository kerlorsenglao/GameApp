import React,{useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
// import Drawer from './src/Drawer';
// import TouchFeedBack from './src/TouchFeedBack';
// import Shadow from './src/Shadow';
// import Visualize from './src/Visualize';
// import Modals from './src/Modal';
import Header from './screens/Header';
import StartGame from './screens/StartGame';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

const App=()=>{
    const [userNumber,setUserNumber] = useState();
    const [guessRounds,setGuessRounds] = useState(0);

    const newGameHandler=()=>{
        setGuessRounds(0);
        setUserNumber(null);
    }
    const startGameHandler =(selectedNum)=>{
        setUserNumber(selectedNum);
    }
    const gameOverHandlere=(numOfRound)=>{
        setGuessRounds(numOfRound);
    }
    let content = <StartGame onStartGame = {startGameHandler}/>;
    if(userNumber && guessRounds <= 0){
        content = <Game userChoice={userNumber} onGameOver={gameOverHandlere}/>
    }else if(guessRounds > 0){
        content = <GameOver rounds={guessRounds} userNumber={userNumber} newGameHandler={newGameHandler}/>
    }
    return (
        <View style={styles.screen}>
            <Header title="Guast A Number"/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
export default App;
