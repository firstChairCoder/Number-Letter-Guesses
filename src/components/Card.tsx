import React, { ReactNode } from "react"
import { View, StyleSheet, ViewStyle } from "react-native"

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    padding: 20,
    borderRadius: 10
  }
})

interface CardProps {
  children: ReactNode
  style?: ViewStyle
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>
}

export default Card
