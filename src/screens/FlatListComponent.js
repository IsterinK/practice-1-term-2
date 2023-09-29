import React, { useState } from 'react'
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Dimensions} from 'react-native'

export default function FlatListComponent() {
    const [categoria, setCategoria] = useState("")
    const [categoriasActivas , setCategoriasActivas] = useState([])
    const [categoriasInactivas, setCategoriasInactivas] = useState([])
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

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
        // Buscar la categoría en ambas listas (activas e inactivas)
        const categoriaActiva = categoriasActivas.find((cat) => cat.id === id);
        const categoriaInactiva = categoriasInactivas.find((cat) => cat.id === id);
    
        if (categoriaActiva) {
            // Si la categoría está en la lista de activas, cambia su estado y muévela a inactivas
            const categoriasActivasActualizadas = categoriasActivas.filter((cat) => cat.id !== id);
            categoriaActiva.activa = !categoriaActiva.activa;
            setCategoriasActivas(categoriasActivasActualizadas);
            setCategoriasInactivas([...categoriasInactivas, categoriaActiva]);
        } else if (categoriaInactiva) {
            // Si la categoría está en la lista de inactivas, cambia su estado y muévela a activas
            const categoriasInactivasActualizadas = categoriasInactivas.filter((cat) => cat.id !== id);
            categoriaInactiva.activa = !categoriaInactiva.activa;
            setCategoriasInactivas(categoriasInactivasActualizadas);
            setCategoriasActivas([...categoriasActivas, categoriaInactiva]);
        }
    };

  return (
    <SafeAreaView style={{
            width: '100%',
            height: screenHeight - 50,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: "center",
            marginTop:50
        }}>
            <Text style={{ fontSize: 20, fontWeight:"bold", marginBottom:15}}>Crear categoría de servicio</Text>
            <View style={{
                flexDirection: 'column', 
                alignItems: 'center', 
                marginBottom: 20,
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

            <Text style={{ fontSize: 20 , color:"mediumseagreen" , margin:10}}>Categorías activas:</Text>
            <FlatList
                data={categoriasActivas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, margin:5 }}>{item.nombre}</Text>
                    
                    <TouchableOpacity
                        style={{
                            height: 30,
                            backgroundColor: item.activa ? 'green' : 'red',
                            padding: 3,
                            borderRadius: 10,
                        }}
                        onPress={() => handleCambiarEstado(item.id)}
                    >
                        <Text style={{ color: 'white', fontSize: 16 }}>
                            {item.activa ? 'Desactivar' : 'Activar'}
                        </Text>
                    </TouchableOpacity>
                    </View>
                )}
            />
        

            <Text style={{ fontSize: 20, color:"lightcoral" , margin:10}}>Categorías inactivas:</Text>
            <FlatList
                data={categoriasInactivas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, margin:5 }}>{item.nombre}</Text>
                    
                    <TouchableOpacity
                        style={{
                            height: 30,
                            backgroundColor: item.activa ? 'green' : 'red',
                            padding: 3,
                            borderRadius: 10,
                        }}
                        onPress={() => handleCambiarEstado(item.id)}
                    >
                        <Text style={{ color: 'white', fontSize: 16 }}>
                            {item.activa ? 'Desactivar' : 'Activar'}
                        </Text>
                    </TouchableOpacity>
                    </View>
                )}
            />   
    </SafeAreaView>
  )
}
