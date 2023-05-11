import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://7299b45869854e44be478ad0fdfe6c43@o1366760.ingest.sentry.io/4505164525535232",
  enableInExpoDevelopment: true,
  debug: true,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
