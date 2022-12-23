import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

//Input heights
export const INPUT_SH = 40;//Small height
export const INPUT_MH = 45;//Medium height
export const INPUT_LH = 50;//Large height


const Input = ({ leftIcon: LeftIcon, rightIcon: RightIcon, onChanged, label, error, ...rest }) => {

    return (
        <View style={styles.input_wrapper}>
            {(label && (label !== "")) && (
                <Text style={styles.input_label}>
                    {label}
                </Text>
            )}

            <View style={styles.input_container}>
                {LeftIcon && (
                    <View style={styles.input_icon}>
                        <LeftIcon />
                    </View>
                )}

                <TextInput
                    {...rest}
                    style={styles.input_element}
                    onChangeText={(text) => { if (onChanged) onChanged(text, rest.name) }}
                />

                {RightIcon && (
                    <View style={styles.input_icon}>
                        <RightIcon />
                    </View>
                )}
            </View>

            {(error && (error !== "")) && (
                <Text style={styles.input_error}>
                    *{error}
                </Text>
            )}
        </View>
    )

}

export default Input

Input.defaultProps = {
    leftIcon: null,
    rightIcon: null,
    underlineColorAndroid: "transparent",
    placeholderTextColor: "#b3b6b7",
    selectionColor: "#99a3a4",
    label: "",
    error: ""
}

const styles = StyleSheet.create({
    input_wrapper: {
        marginVertical: 7,
        backgroundColor: 'transparent'
    },
    input_container: {
        height: INPUT_MH,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,
        borderWidth: 0,
        backgroundColor: '#e3e3e3',
        paddingHorizontal: 10,
        marginVertical: 1,
    },
    input_element: {
        flex: 1,
        color: '#424242'
    },
    input_icon: {
        height: INPUT_MH, 
        width: INPUT_MH,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdfefe'
    },
    input_label: {
        fontSize: 14,
        color: '#5e5873',
        fontWeight: 'bold',
        marginBottom: 10
    },
    input_error: {
        fontSize: 12,
        color: '#ea5455',
        fontWeight: '500',
        marginTop: 5
    },
    input_info: {
        fontSize: 12,
        color: '#6e6b7b',
        fontWeight: '500',
        marginTop: 5
    }
});