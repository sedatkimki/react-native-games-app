import { Linking, Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const VisitButton = ({ title, url }) => {
  return (
    <Pressable
      onPress={() => {
        Linking.openURL(url);
      }}
      style={styles.button}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default VisitButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    color: "#313131",
  },
});
