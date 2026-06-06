import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomModal from "../components/CustomModal";

export default function ModalScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <CustomModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          navigation.goBack();
        }}
        title="Hello Students!"
        message="This is a reusable modal component"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});