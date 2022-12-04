import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const GameImage = ({ source }) => {
  return <Image style={styles.image} source={source} />;
};

export default GameImage;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 104,
    resizeMode: "cover",
  },
});
