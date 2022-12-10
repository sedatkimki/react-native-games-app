import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import {
  addFavourites,
  removeFromFavourites,
  selectFavourites,
} from "../../../../redux/slices/favourites/favouritesSlice";

const FavouriteButton = ({ item }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const [isFavourited, setIsFavourited] = useState(
    favourites.list.find((game) => game.id === item.id)
  );

  const onPress = () => {
    if (isFavourited) {
      dispatch(removeFromFavourites(item));
      setIsFavourited(false);
    } else {
      dispatch(addFavourites(item));
      setIsFavourited(true);
    }
  };

  return (
    <Button
      title={isFavourited ? "Unfavourite" : "Favourite"}
      onPress={onPress}
    />
  );
};

export default FavouriteButton;

const styles = StyleSheet.create({});
