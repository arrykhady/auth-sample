import React, { useEffect, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'

import Snack from '../components/common/Snack'
import Click from '../components/common/Click'
import Loader from '../components/common/Loader'
import Logo from '../components/common/Logo'
import Input from '../components/inputs/Input'

import { useApi } from '../hooks/useApi'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAuth } from '../providers/authContext'


const Login = ({ navigation }) => {

    const [credentials, setCredentials] = useState({})

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
            delete credentials.password
            onRequested(JSON.stringify(credentials))
        } catch (error) {
            console.error(error)
        }
    }

    const onChanged = (value, name) => {
        try {
            setCredentials((prevValues) => ({ ...prevValues, [name]: value }))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.login_container}>
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

                    <View style={styles.login_form}>
                        <Input
                            name="email"
                            id="email"
                            placeholder="Enter Email"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onChanged={onChanged}
                        />

                        <Input
                            secureTextEntry
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            autoCapitalize="none"
                            keyboardType="default"
                            returnKeyType="done"
                            onChanged={onChanged}
                        />

                        <View style={styles.login_space} />

                        {(error !== "") && (
                            <Snack message={error} />
                        )}

                        {loading ? (
                            <Loader loading={loading} />
                        ) : (
                            <Click
                                label="Login"
                                onClicked={onSubmited}
                            />
                        )}

                        <View style={styles.login_space} />

                        <Click
                            link
                            label="Don't have an account ? Register"
                            onClicked={() => { navigation.navigate('Register') }}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    login_container: {
        flex: 1,
        backgroundColor: '#307ecc'
    },
    login_form: {
        marginVertical: 5,
        marginHorizontal: 30
    },
    login_space: {
        marginVertical: 3
    }
});