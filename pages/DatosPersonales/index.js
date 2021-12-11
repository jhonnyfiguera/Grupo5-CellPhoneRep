import React, { useState, useEffect, useContext } from "react";
import {
  ScrollView,
  Text,
  View,
  Button,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";
import styles from "../../util/styles";
import Globalcontext from "../../components/context";
import { Constants } from "../../util/constants";

export default () => {
  const { DataAuth, setDataAuth } = useContext(Globalcontext);
  const [phone, setPhone] = useState("");

  //Headers
  let headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  //Actualizar Contacto
  const actualizarContacto = () => {
    fetch(`${Constants.BASE_URL}/users/update`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ _id: DataAuth.userId, phone: phone }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style={"auto"} />

        <Text />
        <Text />
        <Text />
        <Text style={styles.titleCellPhone}>Mis Datos</Text>

        <Text />
        <Text />
        <Text />
        <Text>Nombre completo: {DataAuth.name}</Text>

        <Text />
        <Text />
        <Text>Email: {DataAuth.email}</Text>

        <Text />
        <Text />
        <Text>Teléfono: {DataAuth.phone}</Text>

        <Text style={styles.placeholder}></Text>
        <Text style={styles.titleSecondary}> Actualiza Contacto</Text>
        <Text />

        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Teléfono"
        />

        <Text />

        <Button
          title="Guardar cambios"
          onPress={() => {
            setDataAuth({ ...DataAuth, phone });
            setPhone("");
            Alert.alert("Oka", "Se efectuaron los cambios");
            actualizarContacto();
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
};
