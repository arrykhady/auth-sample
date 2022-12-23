import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Snack = ({ message, closable, onClosed }) => {
    return (
        <View style={styles.snack_container}>
            <Text style={styles.snack_message}>
                {message}
            </Text>
            {closable && (
                <TouchableOpacity
                    style={styles.snack_close}
                    onPress={() => { if (onClosed) onClosed() }}
                >
                    <Text style={styles.snack_close_label}>x</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default Snack

Snack.defaultProps = {
    message: "",
    closable: false
}

const styles = StyleSheet.create({
    snack_container: {
        height: 50,
        padding: 10,
        borderRadius: 5,
        marginVertical: 2,
        backgroundColor: "#cd6155",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    snack_message: {
        flex: 1,
        fontSize: 12,
        color: '#fff',
        marginRight: 5
    },
    snack_close: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginLeft: 5,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    snack_close_label: {

    }
});