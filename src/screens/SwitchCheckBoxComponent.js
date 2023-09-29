import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, Switch, Button } from 'react-native';
import Checkbox from 'expo-checkbox';

const SwitchCheckBoxComponent = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const [estaActivo, setEstaActivo] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = () => {
        setEstaActivo(!estaActivo);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = () => {
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Activo:', estaActivo);
        console.log('CheckBox:', isChecked);
    };
        
        
  return (
    <View>
        <Text style={{marginBottom: 5}}>Nombre:</Text>
        <TextInput
            placeholder="Ingresa tu nombre"
            style={{borderColor: "black", borderWidth: 1, borderRadius: 10, width: 200, textAlign: 'center',
            marginBottom: 5}}
            value={nombre}
            onChangeText={(text) => setNombre(text)}
        />
        <Text style={{marginBottom: 5}}>Email:</Text>
        <TextInput
            placeholder="Ingresa tu email"
            style={{borderColor: "black", borderWidth: 1, borderRadius: 10, width: 200, textAlign: 'center',
            marginBottom: 5}}
            value={email}
            onChangeText={(text) => setEmail(text)}
        />
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

        <Button
            
            title="Enviar"
            onPress={handleSubmit}
        />
    </View>
  )
}

export default SwitchCheckBoxComponent
