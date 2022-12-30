import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import HTML from "react-native-render-html";
import ReadMore from "@fawazahmed/react-native-read-more";

const GameDescription = ({ description }) => {
  const contentWidth = useWindowDimensions().width;
  const plainText = description.replace(/<[^>]+>/g, "");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Description</Text>

      <ReadMore numberOfLines={4} style={styles.description}>
        {plainText}
      </ReadMore>
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
