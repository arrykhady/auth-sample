import React from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Click from '../components/common/Click'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAuth } from '../providers/authContext';


const Home = ({ navigation }) => {

    const { user, setAuthentification } = useAuth()

    const { name, username, email, phone, website, address } = user

    return (
        <View style={styles.home_container}>
            <View style={styles.home_content}>
                <Text style={styles.home_title}>
                    Welcome @{username} !!!
                </Text>
                <Text style={styles.home_subtitle}>
                    Your informations :
                    {'\n\n'}
                    {name} {'\n'} {phone} {'\n'} {email} {'\n'}
                </Text>
                <Text style={styles.home_description}>
                    Example of Splash, Login and Register in React Native
                    {'\n\n'}
                    This is the Home Screen
                </Text>

                <Click
                    link
                    label="Logout"
                    onClicked={() => {
                        Alert.alert(
                            'Logout',
                            'Are you sure ? You want to logout ?',
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () => {
                                        return null;
                                    },
                                },
                                {
                                    text: 'Confirm',
                                    onPress: () => {
                                        AsyncStorage.clear();
                                        navigation.replace('Auth');
                                        setAuthentification({})
                                    },
                                },
                            ],
                            { cancelable: false },
                        );
                    }}
                />
            </View>
            <Text style={styles.home_link}>
                www.reactnative.dev
            </Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    home_container: {
        flex: 1, padding: 16
    },
    home_content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    home_description: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 16,
    },
    home_link: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey',
    },
    home_title: {
        fontSize: 20,
        textAlign: 'center'
    },
    home_subtitle: {
        fontSize: 14,
        textAlign: 'center'
    }
});