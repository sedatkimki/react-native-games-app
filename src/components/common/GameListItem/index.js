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
            uri: "https://s3-alpha-sig.figma.com/img/23a0/2645/15fb5b947775dad15186f70457f39007?Expires=1670803200&Signature=D3QVc-bEdTbqaW8orEESTVkz-~s9k0ZQeldlGpRXUsB6PsHxZ4nse0QR4Q4aszJtWAfX1BFkJflk8kL9LIn8RIybqCWGYOc6dJKZ0a-OlIemk04iz-wCH0NuRVbqiXZclS0SXseiXFw-6822HBtyJaMWr53FU~7DVNWls00Su6i5wsDL~1QZoAS3DdMA2Na3-z81qM1GMwyKifw5HI43fkDT5dPI2UcBWDEAkgFPzPBgEIibVmkpmKt~QZGAFQeBd7Napn-62hXXg8l0QslNjzzH95FiEfdhBPo4v44i56QKTNLrgrIfmEHiYDzBCcwqHS2tJCuIio4ZuKp0fpjd7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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
