import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NoRecord: React.FC<{ text: string }> = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    text: {
        fontWeight: "bold",
        fontSize: 20
    }
})

export default NoRecord;