import React, { useEffect, useState, useContext } from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../util/styles";
import Globalcontext from "../../components/context";

export default function NuevaReserva({ navigation }) {
  const { DataAuth, setDataAuth } = useContext(Globalcontext);
  const [celular, setCelular] = useState("");
  const [reparacion, setReparacion] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [fecha, setFecha] = useState(0);
  const [comentario, setComentario] = useState("");
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style={"auto"} />
        <Text style={styles.titleCellPhone}>Página en construcción</Text>
        <Text />
        <Text />

        <TextInput
          value={celular}
          onChangeText={setCelular}
          placeholder="Ingresa celular"
        />
        <Text />

        <TextInput
          value={reparacion}
          onChangeText={setReparacion}
          placeholder="Ingresa tipo de reparación"
        />
        <Text />

        <TextInput
          value={sucursal}
          onChangeText={setSucursal}
          placeholder="Ingresa sucural"
        />
        <Text />

        <TextInput
          value={fecha}
          onChangeText={setFecha}
          placeholder="Ingresa fecha"
        />
        <Text />
        <Text />

        <TextInput
          value={comentario}
          onChangeText={setComentario}
          placeholder="Ingresa comentario"
        />
        <Text />
        <Text />

        <Button
          title="Guardar cambios"
          onPress={() => {
            //Falta desarrollo para guardar la reserva
            Alert.alert("Oka", "Se efectuaron los cambios");
          }}
        />
        <Text />
        <Text />

        <Button
          title="Salir"
          onPress={() => {
            setDataAuth({});
          }}
        />
      </View>
    </ScrollView>
  );
}
