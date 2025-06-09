import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAuth } from "../../hooks/AuthContext";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { Colors } from "../../styles/Colors";

export default function LoginScreen() {
  const { login } = useAuth();
  const { width, height } = useScreenDimensions();
  const styles = getStyles(width, height);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor={Colors.text}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor={Colors.text}
      />
      <Button title="Log In" color={Colors.primary} onPress={login} />
    </View>
  );
}

function getStyles(width: number, height: number) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
      backgroundColor: Colors.background,
    },
    title: {
      fontSize: width < 350 ? 20 : 24,
      fontWeight: "bold",
      marginBottom: height * 0.03,
      color: Colors.text,
      textAlign: "center",
    },
    input: {
      borderWidth: 1,
      borderColor: Colors.lightGray,
      padding: 12,
      borderRadius: 8,
      marginBottom: 15,
      fontSize: 16,
      color: Colors.text,
    },
  });
}
