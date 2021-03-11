import React from "react";
import { StyleSheet, View, Text, NativeEventEmitter } from "react-native";
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
import PokeDexScreen from "./PokeDexScreen";
import PokeEquipScreen from "./PokeEquipScreen";
import PokeChatScreen from "./PokeChatScreen";
import PokeUserScreen from  "./PokeUserScreen";


const tab = createBottomTabNavigator();
const Home = ({ navigation }) => {
  
  return (
    <tab.Navigator>
      <tab.Screen name="Pokedex" component={PokeDexScreen}/>
      <tab.Screen name="team" component={PokeEquipScreen}/>
      <tab.Screen name="Chats" component={PokeChatScreen}/>
      <tab.Screen name="User" component={PokeUserScreen}/>
    </tab.Navigator>
  );
};

const styles = StyleSheet.create({
});
export default Home;