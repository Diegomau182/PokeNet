import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fetchPokemon from './src/api';
import ComponetListPokemon from './src/componets/ComponetListPokemon';


export default function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
  const getPokemon = async () => {
    for (let i = 1; i <= 10; i++) {
      const pokemon = await fetchPokemon(i);
      setPokemon(pokemon)
    }
  }
  getPokemon();
},[])

  console.log(pokemon);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <ComponetListPokemon/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
