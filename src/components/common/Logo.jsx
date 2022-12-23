import React from 'react'
import { Image, StyleSheet, View } from 'react-native';

import logo from "../../../assets/logo.png"

const Logo = ({ styles }) => {
    const logoStyles = { ...defaultStyles, ...styles }

    return (
        <View style={logoStyles.container}>
            <Image
                source={logo}
                style={{
                    ...defaultStyles.image, ...logoStyles.image
                }}
            />
        </View>
    );
}

export default Logo

Logo.defaultProps = {
    styles: {}
}

const defaultStyles = StyleSheet.create({
    container: {},
    image: {
        width: '70%',
        resizeMode: 'contain',
        margin: 30
    }
});