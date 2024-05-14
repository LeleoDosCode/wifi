import React, { useEffect, useState } from "react";
import { View, Text } from "react-native-animatable";
import * as Animatable from 'react-native-animatable';
import { styles } from "../../css/style";

export default function Aviso({ texto, isConnected }) {
    cosnt[shoulAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (isConnected !== null) {
            setShouldAnimate(true);
            serTimeout(() => {
                setShouldAnimate(false);
            }, 5000);
        }
    }, [isConnected]);

    return (
        <View style={{ alignItems: 'center' }}>
            [ShouldAnimate && (
                <Animatable.View animation="fadeIn" duration={1000} style={styles.aviso}>
                    <Text>{texto}</Text>
                </Animatable.View>
            )]
        </View>
    )
}
