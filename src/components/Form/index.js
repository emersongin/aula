import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import ResultIMC from './ResultIMC';

export default function Form() {

    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);

    const calcularIMC = (peso, altura) => {
        return Number(peso / (altura * 2)).toFixed(2);
    };

	return (
		<View style={styles.card}>
            <Text style={styles.text}>peso</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder="digite seu peso" 
                keyboardType="numeric"
                onChangeText={setWeight}
                value={weight}
            />
            <Text style={styles.text}>altura</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder="digite sua altura" 
                keyboardType="numeric"
                onChangeText={setHeight}
                value={height}    
            />
            <Button style={styles.button} title="Calcular IMC" color="#fa0" onPress={() => {
                console.warn(calcularIMC(weight, height));
            }}/>
        </View>
	);
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 32
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    textInput: {
        fontSize: 32,
        marginBottom: 24
    },
    button: {
        fontWeight: 'bold',
        fontSize: 24
    }
});