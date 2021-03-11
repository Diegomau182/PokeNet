import React from 'react';
import {StyleSheet,View, Text} from 'react-native';

const PokeEquipScreen =() => {
    return (
        <View style={styles.conteiner}>
            <Text>Pantalla de equipos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        backgroundColor: '#AFEEEE',
    }
});

export default PokeEquipScreen;