import React, { useState, useContext } from "react";
import {
  ScrollView,
  Text,
  View,
  Button,
  StatusBar,
  TextInput,
} from "react-native";
import styles from "../../util/styles";
import Globalcontext from "../../components/context";

export default ({ navigation }) => {
  const { DataAuth, setDataAuth } = useContext(Globalcontext);
  const [name, setName] = useState(DataAuth.name);
  const [email, setEmail] = useState(DataAuth.email);
  const [phone, setPhone] = useState(DataAuth.phone);

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style={"auto"} />

        <Text></Text>
        <Text style={styles.titleCellPhone}>
          Mis datos{" "}
        </Text>

        <br></br>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Nombre y Apellido"
        />

        <TextInput value={email} disabled placeholder="Nombre y Apellido" />

        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Teléfono"
        />

        <br></br>

        {/** 
				<Text style={styles.titleCellPhone}>Actualiza tus datos </Text>

				<br></br>
				<br></br>

				{ (name !== undefined) ? <Text/>
					: (<TextInput value={name} onChangeText={setName} placeholder="Ingresa tu Nombre y Apellido" />)
				}
				
				<TextInput value={phone} onChangeText={setPhone} placeholder="Ingresa tu teléfono" />

				<br></br>
				*/}
        <Button
          title="Guardar cambios"
          onPress={() => {
            setDataAuth({ ...DataAuth, name, phone });
            alert("Se efectuaron los cambios");
          }}
        />

        <br></br>
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
