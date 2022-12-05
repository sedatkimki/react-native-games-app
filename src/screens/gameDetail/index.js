import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import FavouriteButton from "./components/FavouriteButton";
import GameHeader from "./components/GameHeader";
import GameDescription from "./components/GameDescription";
import VisitButton from "./components/VisitButton";

const Divider = () => (
  <View
    style={{
      borderBottomColor: "#000000",
      marginLeft: 16,
      marginVertical: 16,
      borderBottomWidth: StyleSheet.hairlineWidth,
    }}
  ></View>
);

const GameDetail = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => <FavouriteButton />,
    });
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <GameHeader
        title="Grand Theft Auto V"
        imageSource={{
          uri: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        }}
      />
      <GameDescription description="Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles including every transport you can operate...." />
      <Divider />
      <VisitButton
        url="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
        title={"Visit reddit"}
      />
      <Divider />
      <VisitButton
        url="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
        title={"Visit website"}
      />
      <Divider />
    </ScrollView>
  );
};

export default GameDetail;

const styles = StyleSheet.create({});
