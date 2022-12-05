import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import HTML from "react-native-render-html";

const GameDescription = ({ description }) => {
  const contentWidth = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Description</Text>
      <Text style={styles.description}>
        <HTML source={{ html: description }} contentWidth={contentWidth} />
      </Text>
    </View>
  );
};

export default GameDescription;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    paddingBottom: 8,
  },
  description: {
    fontSize: 10,
    lineHeight: 22,
    letterSpacing: -0.41,
  },
});
