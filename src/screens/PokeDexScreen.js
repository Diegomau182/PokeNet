import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fetchPokemon from '../api';
import ComponetListPokemon from '../componets/ComponetListPokemon';
import SelectGenerationComponnet from '../componets/SelectGenerationComponnet'


const PokeDexScreen= () => {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
  const getPokemon = async () => {
    let generacion = [];
    for (let i = 1; i <= 151; i++) {
      if (i != 137) {
        const pokemon = await fetchPokemon(i);
        generacion = generacion.concat(pokemon);
        
      }
      else
      {

      }
    }
      setPokemon(generacion)
  }
  getPokemon();
},[])

  console.log(pokemon);

  return (
    <View style={styles.container}>
      <SelectGenerationComponnet/>
      <ComponetListPokemon generacion ={pokemon}/>
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
export default PokeDexScreen;
