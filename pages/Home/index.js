import React, { useEffect, useState, useContext } from "react";
import {   Text, View, } from "react-native";

import styles from "../../util/styles";

export default function Home() {
    return (
        <View>
            <Text>Imagen de sucursal Colonia</Text>
            <Text>Imagen de sucursal Mercedes</Text>
            <Text>Imagen de sucursal Fray Bentos</Text>
            <Text>Imagen de sucursal Montevideo</Text>
        </View>
    );
}