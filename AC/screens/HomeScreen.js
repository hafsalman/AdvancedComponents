import React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import Colors from "../constants/colors";

export default function HomeScreen({ navigation }) {
  const showAlert = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => console.log("Logged out") },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <CustomButton title="Show Alert" onPress={showAlert} />
      <CustomButton
        title="Open Modal"
        onPress={() => navigation.navigate("Modal")}
      />
      <CustomButton
        title="Go to Picker"
        onPress={() => navigation.navigate("Picker")}
      />
      <CustomButton
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <CustomButton
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.background },
  title: { fontSize: 24, marginBottom: 20, fontWeight: "bold", color: Colors.text },
});