import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './Header';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Register from '../screens/Register';
import Splash from '../screens/Splash';


const Stack = createNativeStackNavigator();

const AuthStackScreens = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const AccountStackScreens = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Auth Sample',
                    header: () => (
                        <Header title="Auth Sample" />
                    )
                }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: 'Auth Sample',
                    header: () => (
                        <Header title="Auth Sample" />
                    )
                }}
            />
        </Stack.Navigator>
    );
};

const Navigation = () => {
    
    return (
        <Stack.Navigator initialRouteName="Splash">
            {/* SplashScreen which will come once for 5 Seconds */}
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />

            {/* Auth Navigator: Include Login and Signup */}
            <Stack.Screen
                name="Auth"
                component={AuthStackScreens}
                options={{ headerShown: false }}
            />

            {/* Account Navagator: include Home ans Settings */}
            <Stack.Screen
                name="Account"
                component={AccountStackScreens}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Navigation