import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../styles/Colors";
import useScreenDimensions from "../../hooks/useScreenDimensions";

export default function SignupScreen() {
  const navigation = useNavigation();
  const { width, height } = useScreenDimensions();
  const styles = getStyles(width, height);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Sign up with:", email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor={Colors.text}
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor={Colors.text}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Sign Up" onPress={handleSignup} color={Colors.primary} />

      <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
        <Text style={styles.link}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

function getStyles(width: number, height: number) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: "center",
      backgroundColor: Colors.background,
    },
    title: {
      fontSize: width < 350 ? 20 : 24,
      fontWeight: "600",
      marginBottom: height * 0.04,
      textAlign: "center",
      color: Colors.text,
    },
    input: {
      height: 48,
      borderWidth: 1,
      borderColor: Colors.lightGray,
      borderRadius: 6,
      marginBottom: 16,
      paddingHorizontal: 12,
      color: Colors.text,
    },
    link: {
      marginTop: 20,
      color: Colors.primary,
      textAlign: "center",
    },
  });
}
