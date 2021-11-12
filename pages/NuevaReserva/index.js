import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function NuevaReserva() {

    /*Hooks: 
    Tipo de Celular (lista desplegable)
    Tipo de Reparación (lista desplegable)
    Día
    Comentarios
    */
    const [celular, setCelular] = useState("");
    const [reparacion, setReparacion] = useState("");
    const [fecha, setFecha] = useState(0);
    const [comentario, setComentario] = useState("");
    return (
        <View>
            <Text>Hola pagina nueva reserva </Text>
        </View>
    );

}