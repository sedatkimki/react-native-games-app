import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React from "react";
import { removeFromFavourites } from "../../../redux/slices/favourites/favouritesSlice";
import { useDispatch } from "react-redux";

const DeleteButton = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        Alert.prompt(
          "Delete " + item.name,
          "Are you sure you want to delete " +
            item.name +
            " from your favourites list?",
          [
            {
              text: "Delete",
              onPress: () => {
                dispatch(removeFromFavourites(item));
              },
            },
            {
              text: "Cancel",
              style: "cancel",
            },
          ],
          {
            cancelable: true,
          }
        );
      }}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Delete</Text>
      </View>
    </Pressable>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  button: {
    width: 75,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
