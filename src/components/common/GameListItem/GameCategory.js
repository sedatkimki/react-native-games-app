import { StyleSheet, Text } from "react-native";
import React from "react";

const GameCategory = ({ children }) => {
  return <Text style={styles.category}>{children}</Text>;
};

export default GameCategory;

const styles = StyleSheet.create({
  category: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
    color: "#8A8A8F",
  },
});
