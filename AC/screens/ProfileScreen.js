import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.background },
  title: { fontSize: 24, fontWeight: "bold", color: Colors.text },
});