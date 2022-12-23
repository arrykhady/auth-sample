import React, { useEffect, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

import Click from '../components/common/Click'
import Loader from '../components/common/Loader'
import Logo from '../components/common/Logo'

import Input from '../components/inputs/Input'

import { useApi } from '../hooks/useApi'

import { useAuth } from '../providers/authContext'

import AsyncStorage from '@react-native-async-storage/async-storage'


const Register = ({ navigation }) => {

    const [inputs, setInputs] = useState({})

    const { loading, error, success, data, onRequested } = useApi()

    const { setAuthentification } = useAuth()

    useEffect(() => {
        if (success && data.user && data.token) {
            AsyncStorage.setItem('user_id', JSON.stringify(data)).then(() => {
                setAuthentification(data);
                navigation.replace('Account');
            }).catch((error) => { console.error(error) });
        }
    }, [success])


    const onSubmited = () => {
        try {
            Keyboard.dismiss();
            inputs.username = (inputs.name.split(" ")[0])
            delete inputs.password
            onRequested(JSON.stringify(inputs))
        } catch (error) {
            console.error(error)
        }
    }

    const onChanged = (value, name) => {
        try {
            setInputs((prevValues) => ({ ...prevValues, [name]: value }))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.register_container}>
            <KeyboardAvoidingView
                enabled
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        flex: 1,
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}
                >

                    <Logo
                        styles={{
                            container: { alignItems: 'center', marginBottom: 20 },
                            image: { width: '50%', height: 100, margin: 0 }
                        }}
                    />

                    <View style={styles.register_form}>
                        <Input
                            name="name"
                            id="name"
                            placeholder="John Doe"
                            autoCapitalize="words"
                            keyboardType="default"
                            returnKeyType="next"
                            onChanged={onChanged}
                        />

                        <Input
                            name="phone"
                            id="phone"
                            placeholder="+1 514-124-1233"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            returnKeyType="next"
                            onChanged={onChanged}
                        />

                        <Input
                            name="email"
                            id="email"
                            placeholder="john@gmail.com"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onChanged={onChanged}
                        />

                        <Input
                            secureTextEntry
                            name="password"
                            id="password"
                            placeholder="Your password please ;-)"
                            autoCapitalize="none"
                            keyboardType="default"
                            returnKeyType="done"
                            onChanged={onChanged}
                        />

                        <View style={styles.register_space} />

                        {(error !== "") && (
                            <Snack message={error} />
                        )}

                        {loading ? (
                            <Loader loading={loading} />
                        ) : (
                            <Click
                                label="Register"
                                onClicked={onSubmited}
                            />
                        )}

                        <View style={styles.register_space} />

                        <Click
                            link
                            label="Already have an account ? Login"
                            onClicked={() => { navigation.navigate('Login') }}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Register


const styles = StyleSheet.create({
    register_container: {
        flex: 1,
        backgroundColor: '#307ecc'
    },
    register_form: {
        marginVertical: 5,
        marginHorizontal: 30
    },
    register_space: {
        marginVertical: 3
    }
});