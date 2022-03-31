import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Button as RNButton
} from "react-native"

import { Button, Card, Input, Numeral } from "../components"
import colors from "../constants"

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  cardStyle: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  title: {
    fontFamily: "CrimsonPro_700Bold",
    fontSize: 24,
    marginVertical: 10
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  button: {
    width: 100
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
})

interface StartGameScreenProps {
  onStartGame: (selectedNumber: number) => void
}

export const StartGameScreen: React.FC<StartGameScreenProps> = ({
  onStartGame
}) => {
  const [enteredValue, setEnteredValue] = useState<string>("")
  const [confirmed, setConfirmed] = useState<boolean>(false)
  const [selectedNumber, setSelectedNumber] = useState<number>(0)

  const numberInputHandler = (value: string) => {
    setEnteredValue(value.replace(/[^0-9]/g, ""))
  }

  const resetInputHandler = () => {
    setEnteredValue("")
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      )
      return
    }
    setConfirmed(true)
    setEnteredValue("")
    setSelectedNumber(chosenNumber)
  }

  let confirmedOutput

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected:</Text>
        <Numeral>{selectedNumber}</Numeral>
        <Button onPress={() => onStartGame(selectedNumber)}>Start Game</Button>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.cardStyle}>
          <Text
            numberOfLines={2}
            style={{
              fontFamily: "Merriweather_400Regular",
              textAlign: "center"
            }}
          >
            Enter a valid number between{"\n"} 1 - 99
          </Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <RNButton
                title="Reset"
                onPress={resetInputHandler}
                color={colors.accent}
              />
            </View>
            <View style={styles.button}>
              <RNButton
                title="Confirm"
                onPress={confirmInputHandler}
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}
