import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';

const SwitchCheckBoxComponent = () => {
    const [estaActivo, setEstaActivo] = useState(false);

    const handleSwitchChange = () => {
        setEstaActivo(!estaActivo);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
        
  return (
    <View>
        <View style={{ flexDirection: 'row', alignItems:
            'center' }}>
            <Switch
            value={estaActivo}
            onValueChange={handleSwitchChange}
            />
            <Text>Activo</Text>
        </View>
    </View>
  )
}

export default SwitchCheckBoxComponent
