import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
} from "react-native";
 
export default function Login() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/Blue_Logo.png")} />
 
      <StatusBar style="auto" />
       <Text> allow Wifi permission</Text>
<Text><Button
        title="Turn on"
         onPress={() => Alert.alert('Application needs Wifi permissions.')}
      />
      </Text>
  
        </View>

        
  );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
 
  image: {
    marginBottom: 180,
    width: 200,
    height: 120,
  },
  
});