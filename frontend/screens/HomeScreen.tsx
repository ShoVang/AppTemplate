import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import ModalComponent from "../components/ModalComponent";
import PickerComponent from "../components/PickerComponent";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Apple");

  return (
    <View style={{ padding: 20 }}>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />

      <ModalComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <Text>This is inside the modal!</Text>
      </ModalComponent>

      <PickerComponent
        selectedValue={selectedItem}
        onValueChange={setSelectedItem}
        options={["Apple", "Banana", "Cherry"]}
      />

      <Text>Selected: {selectedItem}</Text>
    </View>
  );
}
