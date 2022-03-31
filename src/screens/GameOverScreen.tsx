import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

import colors from "../constants"
import { Button } from "../components"

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 1000,
    marginVertical: 20,
    overflow: "hidden"
  },
  highlight: {
    fontFamily: "CrimsonPro_700Bold",
    fontSize: 24,
    color: colors.primary
  },
  textContainer: {
    width: "80%"
  },
  bodyText: {
    fontFamily: "Merriweather_400Regular",
    color: "grey",
    textAlign: "center",
    fontSize: 16
  },
  image: {
    height: "100%",
    width: "100%"
  },
  button: {
    marginVertical: 10
  }
})

interface GameOverScreenProps {
  roundsNumber: number
  userNumber: number
  onRestart: () => void
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  roundsNumber,
  userNumber,
  onRestart
}) => {
  return (
    <View style={styles.screen}>
      <Text style={{ fontFamily: "CrimsonPro_700Bold", fontSize: 24 }}>
        The Game is Over!
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.bodyText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
      </View>
      <View style={styles.button}>
        <Button onPress={onRestart}>New Game</Button>
      </View>
    </View>
  )
}
