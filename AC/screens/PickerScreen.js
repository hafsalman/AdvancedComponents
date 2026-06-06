import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Colors from "../constants/colors";

export default function PickerScreen() {
  const [language, setLanguage] = useState("java");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Favorite Language</Text>
      <Picker
        selectedValue={language}
        onValueChange={(itemValue) => setLanguage(itemValue)}
        style={{ width: 250, color: Colors.text }}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="javascript" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C++" value="cpp" />
      </Picker>
      <Text style={{ marginTop: 20, color: Colors.text }}>Selected: {language}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.background },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20, color: Colors.text },
});