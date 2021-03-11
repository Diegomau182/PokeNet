import React from 'react';
import {StyleSheet,View, Text} from 'react-native';

const PokeUserScreen =() => {
    return (
        <View style={styles.conteiner}>
            <Text>Pantalla de Usuario</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        alignContent:"center",
        justifyContent:"center",
        backgroundColor: '#90EE90',
    }
});

export default PokeUserScreen;