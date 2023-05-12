import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { init, Native as Sentry } from "sentry-expo";

init({
  dsn: "https://7299b45869854e44be478ad0fdfe6c43@o1366760.ingest.sentry.io/4505164525535232",
  enableInExpoDevelopment: true,
});

export default function App() {
  return (
    <Sentry.ErrorBoundary fallback={<Text>Crashed!</Text>}>
      <View style={styles.container}>
        <Button
          title={"Crash"}
          onPress={() => {
            throw new Error("Test Error");
          }}
        />
        <Button
          title={"Native Crash"}
          onPress={() => {
            Sentry.nativeCrash();
          }}
        />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Sentry.ErrorBoundary>
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
