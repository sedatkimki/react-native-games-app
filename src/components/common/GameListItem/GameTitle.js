import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameTitle = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default GameTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 25,
    letterSpacing: 0.38,
  },
});