import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../../navigation/AuthNavigator";

import { Colors } from "../../styles/Colors";
import useScreenDimensions from "../../hooks/useScreenDimensions";

type AuthScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export default function WelcomeScreen() {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const { width, height } = useScreenDimensions();
  const styles = getStyles(width, height);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <Button
        title="Log In"
        color={Colors.primary}
        onPress={() => navigation.navigate("Login")}
      />
      <View style={{ height: 10 }} />
      <Button
        title="Sign Up"
        color={Colors.primary}
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
}

function getStyles(width: number, height: number) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: Colors.background,
    },
    title: {
      fontSize: width < 350 ? 20 : 24,
      fontWeight: "bold",
      marginBottom: height * 0.04,
      color: Colors.text,
    },
  });
}
