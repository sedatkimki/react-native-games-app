import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EmptyComponent = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    lineHeight: 41,
    letterSpacing: 0.41,
    paddingTop: 36,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});
