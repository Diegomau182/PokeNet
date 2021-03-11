import React from 'react';
import {StyleSheet,View,Picker,TouchableOpacity} from 'react-native';
import {BottomSheet,ListItem} from 'react-native-elements';

const SelectGenerationComponnet = ({
    callback
}
) =>{
    const generaciones = [{name:'Todas',id:9},{name:'Generacion 1',id:1},{name:'Generacion 2',id:2},
                          {name:'Generacion 3',id:3},{name:'Generacion 4',id:4},{name:'Generacion 5',id:5},
                          {name:'Generacion 6',id:6},{name:'Generacion 7',id:7},{name:'Generacion 8',id:8}]
    return (
        <View>
            <Picker>
            {
                generaciones.map((generacion) => (
                        <Picker.Item label = {generacion.name} key = {generacion.id}  >
                        </Picker.Item>
                ))
            }
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
});

export default SelectGenerationComponnet;