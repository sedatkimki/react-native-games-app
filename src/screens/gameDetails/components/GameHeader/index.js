import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import React from "react";

const GameHeader = ({ title, imageSource }) => {
  return (
    <ImageBackground style={styles.image} source={imageSource}>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0) ", "rgba(0, 0, 0, 0.8)"]}
        locations={[0.3, 1]}
        style={styles.gradientContainer}
      >
        <Text style={styles.title}> {title}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default GameHeader;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: 0.3,
    color: "white",
    textAlign: "right",
  },
  gradientContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 16,
  },
});
