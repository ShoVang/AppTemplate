import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./hooks/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
