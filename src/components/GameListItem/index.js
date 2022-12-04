import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import GameTitle from "./GameTitle";
import GameScore from "./GameScore";
import GameCategory from "./GameCategory";
import GameImage from "./GameImage";

const GameListItem = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.leftContainer}>
        <GameImage
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
      <View style={styles.rightContainer}>
        <GameTitle>Grand Theft Auto V</GameTitle>
        <View>
          <GameScore>96</GameScore>
          <GameCategory>Action, shooter</GameCategory>
        </View>
      </View>
    </Pressable>
  );
};

export default GameListItem;

const styles = StyleSheet.create({
  container: ({ pressed }) => ({
    padding: 16,
    flexDirection: "row",
    backgroundColor: "#fff",
    backgroundColor: pressed ? "#E0E0E0" : "#fff",
  }),
  leftContainer: {
    paddingRight: 16,
  },
  rightContainer: {
    justifyContent: "space-between",
  },
  // rightHeader: {},
  // rightFooter: {},
});
