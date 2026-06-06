import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    minWidth: 180,
  },
  text: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});