import React from "react";
import { StyleSheet, View, Text, NativeEventEmitter } from "react-native";
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
import {PokeDexScreen} from "./PokeDexScreen"


const tab = createBottomTabNavigator();
const Home = ({ navigation }) => {
  
  return (
    <createBottomTabNavigator.Navigator>
      <createBottomTabNavigator.Screen name="Pokedex" component={PokeDexScreen} />
    </createBottomTabNavigator.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Home;