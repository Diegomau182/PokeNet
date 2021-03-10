import React from "react";
import { StyleSheet, View, Text, NativeEventEmitter } from "react-native";
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
import PokeDexScreen from "./PokeDexScreen"


const tab = createBottomTabNavigator();
const Home = ({ navigation }) => {
  
  return (
    <tab.Navigator>
      <tab.Screen name="Pokedex" component={PokeDexScreen}/>
    </tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Home;