import React from 'react';
import {StyleSheet,View, Text} from 'react-native';

const PokeChatScreen =() => {
    return (
        <View style={styles.conteiner}>
            <Text>Pantalla de Chats</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        backgroundColor: '#808000',
    }
});

export default PokeChatScreen;