import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import Checkbox from 'expo-checkbox';

const SwitchCheckBoxComponent = () => {
    const [estaActivo, setEstaActivo] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

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
        <View style={{ flexDirection: 'row', alignItems:'center' }}>
            <Checkbox
                value={isChecked}
                onValueChange={handleCheckboxChange}
            />
            <Text>CheckBox</Text>
        </View>
    </View>
  )
}

export default SwitchCheckBoxComponent
