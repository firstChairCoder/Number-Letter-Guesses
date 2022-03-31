import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
// import * as Font from "expo-font"
import AppLoading from "expo-app-loading"
import { useFonts, CrimsonPro_700Bold } from "@expo-google-fonts/crimson-pro"
import { Merriweather_400Regular } from "@expo-google-fonts/merriweather"

import { Header } from "./src/components"
import { StartGameScreen } from "./src/screens/StartGameScreen"
import { GameScreen, PastGuesses } from "./src/screens/GameScreen"
import { GameOverScreen } from "./src/screens/GameOverScreen"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default function App() {
  const [userNumber, setUserNumber] = useState<number>(0)
  const [gameGuesses, setGameGuesses] = useState<PastGuesses>([])
  let [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    CrimsonPro_700Bold
  })

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = (pastGuesses: number[]) => {
    setGameGuesses(pastGuesses)
  }

  const configureNewGameHandler = () => {
    setGameGuesses([])
    setUserNumber(0)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && gameGuesses.length <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    )
  } else if (gameGuesses.length > 0) {
    content = (
      <GameOverScreen
        roundsNumber={gameGuesses.length}
        userNumber={userNumber}
        onRestart={() => configureNewGameHandler()}
      />
    )
  }

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <Header title="Take a guess" />
        {content}
      </View>
    )
  }
}
