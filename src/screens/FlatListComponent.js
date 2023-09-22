import React, { useState } from 'react'
import { View, Text, TextInput, Button, FlatList } from 'react-native'

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
        };

        setCategoriasActivas([...categoriasActivas, nuevaCategoria]);
        setCategoria("");
    };

    const handleCambiarEstado = (id) => {
        const categoriasActualizadas = categoriasActivas.map((cat) => 
            cat.id === id ? {...cat, activa: !cat.activa} : cat
        );
        setCategoriasActivas(categoriasActualizadas)
    }

  return (
    <div>
      
    </div>
  )
}
