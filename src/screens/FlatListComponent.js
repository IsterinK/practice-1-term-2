import React, { useState } from 'react'
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'

export default function FlatListComponent() {
    const [categoria, setCategoria] = useState("")
    const [categoriasActivas , setCategoriasActivas] = useState([])
    const [categoriasInactivas, setCategoriasInactivas] = useState([])

    const handleAgregarCategoria = () => {
        if(categoria.trim() !== ""){
            const nuevaCategoria = {
                id: Date.now().toString(),
                nombre: categoria,
                activa: true
            }
            setCategoriasActivas([...categoriasActivas, nuevaCategoria]);
            setCategoria("");
        };

        
    };

    const handleCambiarEstado = (id) => {
        const categoriasActualizadas = categoriasActivas.map((cat) => 
            cat.id === id ? {...cat, activa: !cat.activa} : cat
        );
        setCategoriasActivas(categoriasActualizadas)
    }

  return (
    <SafeAreaView style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: "center",
        padding: 10,
    }}>
        <Text style={{ fontSize: 20, fontWeight:"bold"}}>Crear categoría de servicio</Text>
        <View style={{
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: 10,
        }}>
            <TextInput
                style={{
                    width: 250,
                    marginBottom:20,
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10
                }}
                placeholder='Nombre de la categoría'
                value={categoria}
                onChangeText={(text) => setCategoria(text)}
            />
            <TouchableOpacity
                style={{
                    width: 150,
                    justifyContent: "center",
                    backgroundColor: 'gray', 
                    padding: 10,
                    borderRadius: 5, 
                }}
                onPress={handleAgregarCategoria}
            >
                <Text style={{ color: 'white', fontSize: 16 }}>Agregar categoría</Text>
            </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20 }}>Categorías activas:</Text>
       

        <Text style={{ fontSize: 20 }}>Categorías inactivas:</Text>
        
        
    </SafeAreaView>
  )
}
