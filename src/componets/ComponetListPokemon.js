import React from 'react';
import {StyleSheet,View, Text,Image, ScrollView,Touch} from 'react-native';
const ComponetListPokemon = ({
    generacion,
    callback
}
) =>{
    const imgPokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    return (
        <ScrollView>
            {generacion.map((pokemon) => ( 
                <View>
                    <View key={pokemon.id} style={styles.marcoPokemon}>
                        <Image source={{uri:`${imgPokemon}${pokemon.id}.png`}}
                            style={styles.pokeImagen}>
                        </Image>
                        <Text style={styles.Name}>{pokemon.name}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    
    pokeImagen: {
    flex: 1,
    resizeMode: "stretch",
  },
  marcoPokemon:{
    flex: 1,
    backgroundColor: "#e8cc57",
    height: 150,
    marginLeft: 70,
    marginTop: 20,
    marginRight: 70,
    alignContent: "center",
    justifyContent: "center",
  },
  Name:{
      marginLeft:70,
      alignItems:"center",
      fontSize: 23,
  }

});

export default ComponetListPokemon;