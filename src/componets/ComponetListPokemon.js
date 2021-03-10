import React from 'react';
import {StyleSheet,View, Text,Image, ScrollView} from 'react-native';

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
                    <View style={styles.marcoPokemon}>
                        <Image source={{uri:`${imgPokemon}${pokemon.id}.png`}}
                            style={styles.pokeImagen}>
                        </Image>
                    </View>
                    <Text key={pokemon}>{pokemon.name}</Text>
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
    height: 155,
    marginLeft: -20,
    marginTop: 30,
    marginRight: -20,
    alignContent: "center",
    justifyContent: "center",
  },
  

});

export default ComponetListPokemon;