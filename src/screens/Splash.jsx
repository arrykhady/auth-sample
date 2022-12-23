import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import logo from "../../assets/logo.png"

import { useAuth } from '../providers/authContext';


const Splash = ({ navigation }) => {

    const [animating, setAnimating] = useState(true);

    const { setAuthentification } = useAuth()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimating(false);

            AsyncStorage.getItem('user_id').then((value) => {
                setAuthentification((value ? JSON.parse(value) : {}))
                navigation.replace(value ? 'Account' : 'Auth')
            }).catch((error) => { console.error(error) });
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [])


    return (
        <View style={styles.splash_container}>
            <Image
                source={logo}
                style={styles.splash_logo}
            />
            <ActivityIndicator
                animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.splash_loader}
            />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    splash_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
    },
    splash_loader: {
        alignItems: 'center',
        height: 80,
    },
    splash_logo: {
        width: '70%',
        resizeMode: 'contain',
        margin: 30
    }
});