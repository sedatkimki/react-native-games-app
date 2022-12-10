import { StyleSheet, Text } from "react-native";
import React from "react";

const GameScore = ({ children }) => {
  return (
    <Text style={styles.title}>
      metacritic: <Text style={styles.score}>{children}</Text>
    </Text>
  );
};

export default GameScore;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    lineHeight: 25,
    letterSpacing: 0.38,
    paddingBottom: 8,
  },
  score: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: 0.38,
    color: "#D80000",
    fontWeight: "bold",
  },
});
