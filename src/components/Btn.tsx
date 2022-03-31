import React, { ReactNode } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import colors from "../constants"

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  buttonText: {
    // fontFamily: 'open-sans-bold',
    //     fontSize: 18
    color: "white"
  }
})

interface ButtonProps {
  children: ReactNode | string
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
