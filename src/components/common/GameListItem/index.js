import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import GameTitle from "./GameTitle";
import GameScore from "./GameScore";
import GameCategory from "./GameCategory";
import GameImage from "./GameImage";

const GameListItem = ({ onPress, game, visited }) => {
  if (game) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => ({
          padding: 16,
          flexDirection: "row",
          backgroundColor: pressed ? "#E0E0E0" : "#fff",
          backgroundColor: visited ? "#E0E0E0" : "#fff",
        })}
      >
        <View style={styles.leftContainer}>
          <GameImage
            source={{
              uri: game.background_image,
            }}
          />
        </View>
        <View style={styles.rightContainer}>
          <GameTitle>{game.name}</GameTitle>
          <View>
            <GameScore>{game.metacritic}</GameScore>
            <GameCategory>
              {game.genres.map((item, index) => {
                if (index == 0) {
                  return item.name;
                }
                return ", " + item.name;
              })}
            </GameCategory>
          </View>
        </View>
      </Pressable>
    );
  }
};

export default GameListItem;

const styles = StyleSheet.create({
  leftContainer: {
    paddingRight: 16,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
});
