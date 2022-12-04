import { Button, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import FavouriteButton from "./components/FavouriteButton";
import GameHeader from "./components/GameHeader";

const GameDetail = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => <FavouriteButton />,
    });
  }, []);
  return (
    <View>
      <GameHeader title="Grand Theft Auto V" />
    </View>
  );
};

export default GameDetail;

const styles = StyleSheet.create({});
